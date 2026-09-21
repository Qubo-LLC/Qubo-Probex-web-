# SBOM Generation & Signing — Implementation Notes

## Implemented
- SBOM generation (Syft, SPDX format) — applies to npm dependency tree,
  generated per build, uploaded as CI artifact
- SLSA provenance attestation — generic artifact track, attesting to
  the packaged Next.js build output (.next tarball)

## Deferred — blocked on containerization
- Cosign keyless container signing — no OCI image exists yet to sign
  (repo has no Dockerfile, confirmed via audit, Sept 2026)
- SLSA provenance in its container-attestation form — implemented
  instead using SLSA's generic-artifact track, attesting to a build
  tarball rather than a container image

## Once containerization happens (tracked separately)
Full container-based Cosign signing + SLSA container provenance should
be implemented at that point — this is a straightforward addition once
a Dockerfile/image build step exists, not a redesign. The workflow
structure (SBOM job, build job, provenance job) stays the same; only
the artifact type changes from a tarball to an OCI image.
