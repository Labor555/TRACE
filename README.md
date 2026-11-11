<p align="center">
  <img src="assets/readme-header.svg" width="100%" alt="TRACE — Training-free high-resolution video generation">
</p>

<h2 align="center">Trajectory Synchronization for Training-Free<br>Resolution Extension in Video Generation</h2>

<p align="center">
  <a href="https://www.libozhu.com/">Libo Zhu</a><sup>1</sup> &nbsp;·&nbsp; Fan Li<sup>2</sup> &nbsp;·&nbsp; Zhixin Wang<sup>2</sup><br>
  Binglu Wang<sup>3</sup> &nbsp;·&nbsp; Weisheng Dong<sup>4</sup> &nbsp;·&nbsp; <a href="https://yulunzhang.com/">Yulun Zhang</a><sup>1,*</sup>
</p>

<p align="center">
  <sup>1</sup> Shanghai Jiao Tong University &nbsp;&nbsp; <sup>2</sup> Huawei Technologies Ltd.<br>
  <sup>3</sup> Northwest Polytechnical University &nbsp;&nbsp; <sup>4</sup> Xidian University<br>
  <sub>* Corresponding author</sub>
</p>

<p align="center">
  <a href="https://libozhu03.github.io/TRACE/"><img src="assets/badge-project.svg" alt="Project Page" height="36"></a>
  &nbsp;<img src="assets/badge-paper.svg" alt="arXiv — Coming soon" height="36">
  &nbsp;<a href="#release-status"><img src="assets/badge-code.svg" alt="Code — Coming soon" height="36"></a>
</p>

<p align="center">
  <a href="#overview">Overview</a> &nbsp; / &nbsp;
  <a href="#method">Method</a> &nbsp; / &nbsp;
  <a href="#results">Results</a> &nbsp; / &nbsp;
  <a href="#release-status">Release</a>
</p>

<p align="center">
  <img src="docs/assets/teaser.webp" width="100%" alt="Figure 1 of the paper: TRACE video generation results, spatial detail, temporal consistency, and quality–efficiency comparisons.">
  <br><sub><b>Figure 1.</b> High-resolution generation with rich detail and temporal consistency across video backbones.</sub>
</p>

## Overview

**TRACE** extends pretrained video generators to higher resolutions without training. It synchronizes low- and high-resolution denoising trajectories, refines local detail, and corrects duplicated subjects while preserving detail elsewhere.

<table>
  <tr>
    <td align="center" width="33%"><b>Training-free</b><br><sub>Frozen pretrained backbones</sub></td>
    <td align="center" width="34%"><b>1080p · 1440p · 4K</b><br><sub>High-resolution video generation</sub></td>
    <td align="center" width="33%"><b>2.0–2.9× faster</b><br><sub>End-to-end speedup over FreeSwim</sub></td>
  </tr>
</table>

<details>
<summary><b>Read the full abstract</b></summary>

More text-to-video models are available, but many remain limited to low resolutions. Training them for higher resolutions is costly, while existing training-free methods still struggle with fine detail, scene structure, and efficiency. We propose TRACE, a training-free method that synchronizes low- and high-resolution generation trajectories. During early denoising, TRACE aligns predicted scene content at corresponding noise levels. It computes high-resolution updates from low-resolution predictions and the current high-resolution state, without high-resolution model inference. The high-resolution trajectory retains fine-grained variation for generating new details. Local window attention then refines fine details in a shared high-resolution latent state. TRACE checks suspected duplicate subjects against the corresponding low-resolution layout and corrects selected regions and their solver history while preserving detail elsewhere. Experiments across all kinds of video generation backbones and resolutions show improved perceptual quality and text–video alignment over FreeSwim, a state-of-the-art training-free method, with 2.0–2.9× end-to-end speedups. Our code and models will be released at https://github.com/libozhu03/TRACE.

</details>

## Method

**Cross-scale trajectory synchronization (CSTS)** constructs early high-resolution updates from low-resolution predictions and the current high-resolution state, avoiding high-resolution model inference. Window attention then refines local detail on a shared latent state. **Trajectory-guided structural correction (TGSC)** uses low-resolution references to identify duplicated subjects and correct selected regions and their solver history.

<p align="center">
  <img src="docs/assets/method.webp" width="100%" alt="TRACE framework: cross-scale trajectory synchronization, high-resolution inference, and trajectory-guided structural correction.">
  <br><sub><b>Figure 3 from the paper.</b> CSTS guides early denoising, window attention refines detail, and TGSC corrects duplicated subjects.</sub>
</p>

## Results

TRACE improves perceptual quality and text–video alignment over FreeSwim across the three evaluated backbones. The benchmark uses **120 fixed prompt–reference pairs**, matched seeds, and **81 frames at 16 FPS**.

| Backbone | Resolution | Q-Align ↑ · FreeSwim → TRACE | Speedup |
| :--- | :---: | :---: | :---: |
| Wan2.1-T2V-1.3B | 1920 × 1088 | 4.381 → **4.690** | **2.74×** |
| Wan2.2-T2V-A14B | 2560 × 1440 | 4.524 → **4.752** | **2.92×** |
| Bernini-R-1.3B | 1920 × 1088 | 4.572 → **4.727** | **2.02×** |

<sub>Table 1 and Section 4.2 of the paper. End-to-end latency is measured on one A800 GPU and includes low-resolution sampling, VAE transfers, and structural correction.</sub>

<details>
<summary><b>End-to-end inference times</b></summary>

| Backbone | FreeSwim (s) | TRACE (s) |
| :--- | ---: | ---: |
| Wan2.1-T2V-1.3B | 5,010 | **1,826** |
| Wan2.2-T2V-A14B | 27,788 | **9,526** |
| Bernini-R-1.3B | 5,708 | **2,831** |

</details>

<p align="center">
  <img src="docs/assets/paper/scaling.webp" width="100%" alt="Figure 2 of the paper: FreeSwim and TRACE on Wan2.1 at 1080p and 4K, with matched detail crops and timings.">
  <br><sub><b>Figure 2 from the paper.</b> FreeSwim and TRACE at 1080p and 4K; central panels show full frames and outer columns show matched detail crops.</sub>
</p>

<p align="center"><a href="https://libozhu03.github.io/TRACE/"><b>Explore all comparisons and ablations on the project page →</b></a></p>

## Release status

| Project page | Paper on arXiv | Code and models |
| :---: | :---: | :---: |
| [Available](https://libozhu03.github.io/TRACE/) | Coming soon | Coming soon |

Code and models will be released in this repository. The arXiv link and citation will be added after submission.
