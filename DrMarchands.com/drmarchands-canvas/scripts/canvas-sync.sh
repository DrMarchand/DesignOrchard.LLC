#!/bin/sh
set -eu

REPO="$HOME/GitHub/DesignOrchard.LLC/DrMarchands.com/drmarchands-canvas"
LIVE="$HOME/public_html/canvas/bootstrap"

cd "$REPO"

REV=$(git rev-parse --short HEAD)

echo "== validating source =="

node --check src/identity.js
node --check src/bootstrap/bootstrap.js
node --check src/bootstrap/context.js
node --check src/bootstrap/adapters/page-state.js
node --check src/bootstrap/adapters/identity.js
node --check src/ui/404/404.js

php -l src/server/php/bootstrap.php >/dev/null

PYTHONDONTWRITEBYTECODE=1 \
python3 -m py_compile src/server/python/__init__.py

node --test --test-concurrency=1

if npm run | grep -q ' check'; then
    npm run check
fi

echo "== syncing shared Canvas assets =="

mkdir -p \
  "$LIVE/adapters" \
  "$LIVE/ui/tokens" \
  "$LIVE/ui/button" \
  "$LIVE/ui/panel" \
  "$LIVE/ui/notice" \
  "$LIVE/ui/404" \
  "$LIVE/php" \
  "$LIVE/python"

cp -p src/identity.js \
      "$LIVE/identity.js"

cp -p src/bootstrap/context.js \
      "$LIVE/context.js"

cp -p src/bootstrap/adapters/page-state.js \
      "$LIVE/adapters/page-state.js"

sed "s#} from '../../identity.js';#} from '../identity.js';#" \
  src/bootstrap/adapters/identity.js \
  > "$LIVE/adapters/identity.js"

cp -p src/ui/ui.css \
      "$LIVE/ui/ui.css"

cp -p src/ui/tokens/domain.css \
      "$LIVE/ui/tokens/domain.css"

cp -p src/ui/button/button.css \
      "$LIVE/ui/button/button.css"

cp -p src/ui/panel/panel.css \
      "$LIVE/ui/panel/panel.css"

cp -p src/ui/notice/notice.css \
      "$LIVE/ui/notice/notice.css"

cp -p src/ui/404/404.css \
      "$LIVE/ui/404/404.css"

cp -p src/ui/404/404.js \
      "$LIVE/ui/404/404.js"

cp -p src/server/php/bootstrap.php \
      "$LIVE/php/bootstrap.php"

cp -p src/server/python/__init__.py \
      "$LIVE/python/__init__.py"

# Deploy bootstrap.js while preserving the live relative canvas.js path.
sed \
  -e "s#} from '../canvas.js';#} from './canvas.js';#" \
  -e "s#} from '../identity.js';#} from './identity.js';#" \
  src/bootstrap/bootstrap.js \
  > "$LIVE/bootstrap.js"

echo "== validating live files =="

node --check "$LIVE/identity.js"
node --check "$LIVE/bootstrap.js"
node --check "$LIVE/context.js"
node --check "$LIVE/adapters/page-state.js"
node --check "$LIVE/adapters/identity.js"
node --check "$LIVE/ui/404/404.js"

php -l "$LIVE/php/bootstrap.php" >/dev/null

echo "== HTTP checks =="

for path in \
  bootstrap/identity.js \
  bootstrap/bootstrap.js \
  bootstrap/context.js \
  bootstrap/adapters/identity.js \
  bootstrap/ui/ui.css \
  bootstrap/ui/button/button.css \
  bootstrap/ui/panel/panel.css \
  bootstrap/ui/notice/notice.css \
  bootstrap/ui/404/404.js
do
    code=$(curl -sS -o /dev/null -w '%{http_code}' \
        "https://canvas.drmarchandslaboratory.com/$path?v=$REV")

    printf '%s -> %s\n' "$path" "$code"

    [ "$code" = "200" ] || exit 1
done

echo "== Canvas sync complete =="
