# UNI.X

Universal Horizontal Dynamics and Compass Kernel

Status: SEED
Layer: Kernel
Domain: Dynamic Structure

## Purpose

UNI.X defines horizontal orientation before vertical movement or depth assignment.

It establishes the readable working plane for an object:

- left context: source, origin, input, prior state, evidence
- center state: current object, active identity, working context
- right destination: output, next state, route, target

## Core Rule

Before moving up or down, left to right comes first.

No object may be promoted, demoted, archived, published, indexed, or assigned depth until its X-plane is known.

## Required Fields

- object_name
- current_position
- left_context
- center_state
- right_destination
- authority_boundary
- proof_status
- relationship_map
- movement_reason

## Output States

- X_ORIENTED
- X_DIRECTION_UNCLEAR
- X_ROUTE_READY
- X_ROUTE_BLOCKED
- X_PLANE_REQUIRED
- X_DRIFT_DETECTED
- X_SAFE_TO_ADVANCE
- X_HOLD_POSITION

## Relationship

UNI.X supports:

- UNI.LAB
- UNI.LIB
- UNI.LLM
- UNI.Y
- UNI.Z

## Boundary

UNI.X is not storage. UNI.X is orientation logic.

Dynamic Structure uses UNI.X to detect route direction, folder behavior, promotion logic, and gaps.
