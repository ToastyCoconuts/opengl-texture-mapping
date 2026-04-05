# OpenGL Texture Mapping

Implements UV texture mapping on a rotating 3D cube using DDS texture loading, vertex/fragment shaders, and OpenGL's texture pipeline.

Built for COSC 4370 (Computer Graphics) at the University of Houston.

## Concepts
- DDS texture loading and binding
- UV coordinate mapping with vertex buffer objects
- GLSL texture sampling in fragment shaders
- Projection and view matrix pipeline
- Interactive camera system

## Files
- `main.cpp` — Cube geometry, texture loading, and render loop
- `Camera.h` — Camera position, orientation, and view matrix
- `texture.vs` — Vertex shader with UV coordinate adjustment
- `texture.frag` — Fragment shader for texture sampling
- `Report.pdf` — Implementation writeup with rendered output
