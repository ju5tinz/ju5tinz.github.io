---
title: 'On AI Music Production'
date: 2026-08-19
description: 'A case for a different kind of generative AI for music production.'
draft: false
---

The conversation around AI music generation has recently been entirely dominated by end-to-end, text-to-audio models. You type a prompt, and the system spits out a fully formed, highly complex audio waveform. While this is an incredibly interesting task to explore, this brute-force method carries major drawbacks.

For one, it completely bypasses the strengths of foundational Large Language Models (LLMs) and leaves actual musicians with an uneditable, uninterpretable final product. It is time to rethink this architecture. Instead of generating raw audio, we should be using LLMs to generate music through existing, modular production tools.

## The Curse of High Dimensionality

A fundamental problem with end-to-end text-to-audio generation is that these models aren't constrained by the actual features that make music, music.

Most modern systems don't even generate raw waveform samples directly — they first compress audio into a dense sequence of tokens using a neural audio codec, then model the music in that compressed space. But even compressed, that representation is still far higher-dimensional and less structured than the symbolic events that actually define a composition: notes, chords, rhythms. Because the model is reasoning in an acoustic space rather than a musical one, it struggles with long-term structural coherence — timbres bleed into one another, and the model can lose track of tempo or key over longer generations.

## How Do We Actually "Understand" Music?

This raises a philosophical but highly practical question: What does it mean for a human to understand music? How does the mind encode a song?

If we examine the music-making process, much of it can actually be represented as text processing. Sound does not need to be synthesized as a massive wall of audio data; it can be synthesized through a small, manageable set of text-based parameters.

Think about the fundamental building blocks of a track:

- **Rhythm** can be quantized as discrete beats on a numerical grid at an arbitrary resolution.
- **Melody and Harmony** are, at their core, sequences of notes, durations, and velocities.
- **Timbre** can be approximated with a surprisingly small set of parameters — but which parameters, and how faithfully they capture a given sound, depends on the synthesis engine behind them. Simple subtractive synthesis (oscillator, filter, envelope) gets you something instrument-*like*, but rarely something convincingly acoustic. Physical modeling and spectral/additive engines can go much further, reproducing the timbre of a bowed string or a wooden drum shell with real fidelity, from a parameter set still many orders of magnitude smaller than the raw waveform itself.

Much of what makes music structurally coherent — though not necessarily all of what makes it emotionally resonant — can be encoded in text: a low-dimensional representation, instead of the vastly higher dimension of raw audio.

## The Best of Both Worlds: The Hybrid Architecture

While text-based generation gives us tremendous control over composition, it's only ever as good as the engine rendering it. A simple subtractive synth will flatten the grit of a human voice or the resonance of a physical drum room into something generic — and even a sophisticated physical model has limits when it comes to a specific vocalist's idiosyncrasies or the exact resonance of a particular room. The obvious, and necessary, evolution of this workflow is a hybrid approach: separating the "Composer" from the "Performer," and reserving full audio-based generation for the cases that genuinely resist parametric capture.

In this architecture, the LLM acts as the Composer. It handles the theory, calculating tempo, chord progressions, and quantized rhythms on a grid. It outputs pure symbolic data. Then, instead of generating a messy, flattened track, we pass this structural data to focused end-to-end audio models acting as individual Performers.

## Regaining the Mixing Console

Generating individual audio stems brings AI generation back into a traditional production workflow, turning it into a collaborative tool rather than a replacement for one.

Imagine an LLM generating MIDI sequences mapped directly into a DAW. For your synthesizer parts, the MIDI simply triggers existing plugins. But for complex, acoustic elements that are hard to synthesize the system passes that specific MIDI data alongside a text prompt to an audio diffusion model, which renders just that isolated stem.

This hybrid approach shifts AI from being an autonomous black box that replaces the artist, to a tool that can act as a collaborator in the music production process.

---

<p class="muted">Written by me, revised with the help of AI.</p>
