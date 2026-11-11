<p align="center">
  <img src="assets/readme-header.svg" width="280" alt="TRACE — Training-free high-resolution video generation">
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
  <a href="https://labor555.github.io/TRACE/"><img src="assets/badge-project.svg" alt="Project Page" height="24"></a>
  &nbsp;<img src="assets/badge-paper.svg" alt="arXiv — Coming soon" height="24">
  &nbsp;<a href="#release-status"><img src="assets/badge-code.svg" alt="Code — Coming soon" height="24"></a>
  &nbsp;<a href="https://github.com/libozhu03/TRACE/releases/download/paper/main.pdf"><img src="assets/badge-main-pdf.svg" alt="Paper PDF" height="24"></a>
  &nbsp;<a href="https://github.com/libozhu03/TRACE/releases/download/paper/supp.pdf"><img src="assets/badge-supp-pdf.svg" alt="Supplementary material PDF" height="24"></a>
</p>

## 📖 Overview

More text-to-video models are available, but many remain limited to low resolutions. Training them for higher resolutions is costly, while existing training-free methods still struggle with fine detail, scene structure, and efficiency. We propose TRACE, a training-free method that synchronizes low- and high-resolution generation trajectories. During early denoising, TRACE aligns predicted scene content at corresponding noise levels. It computes high-resolution updates from low-resolution predictions and the current high-resolution state, without high-resolution model inference. The high-resolution trajectory retains fine-grained variation for generating new details. Local window attention then refines fine details in a shared high-resolution latent state. TRACE checks suspected duplicate subjects against the corresponding low-resolution layout and corrects selected regions and their solver history while preserving detail elsewhere. Experiments across all kinds of video generation backbones and resolutions show improved perceptual quality and text–video alignment over FreeSwim, a state-of-the-art training-free method, with 2.0–2.9× end-to-end speedups.

<p align="center">
  <img src="docs/assets/teaser.webp" width="100%" alt="Figure 1 of the paper: TRACE video generation results, spatial detail, temporal consistency, and quality–efficiency comparisons.">
  <br><sub><b>Figure 1.</b> High-resolution generation with rich detail and temporal consistency across video backbones.</sub>
</p>

## 🧩 Method

**Cross-scale trajectory synchronization (CSTS)** constructs early high-resolution updates from low-resolution predictions and the current high-resolution state, avoiding high-resolution model inference. Window attention then refines local detail on a shared latent state. **Trajectory-guided structural correction (TGSC)** uses low-resolution references to identify duplicated subjects and correct selected regions and their solver history.

<p align="center">
  <img src="docs/assets/method.webp" width="100%" alt="TRACE framework: cross-scale trajectory synchronization, high-resolution inference, and trajectory-guided structural correction.">
  <br><sub><b>Figure 3 from the paper.</b> CSTS guides early denoising, window attention refines detail, and TGSC corrects duplicated subjects.</sub>
</p>

## 🔎 Results

TRACE delivers better perceptual quality and text alignment across all three backbones, with 2.0–2.9× end-to-end speedups over FreeSwim.

<details open>
<summary><b>Quantitative comparisons — Table 1 of the paper</b></summary>

<p align="center">
  <a href="assets/paper/table-1.png"><img src="assets/paper/table-1.png" width="100%" alt="Original Table 1 from the TRACE paper, including all methods, metrics, inference times, and red/blue score markings."></a>
</p>

</details>

<details open>
<summary><b>Visual comparison — Figure 6 of the paper</b></summary>

<p align="center">
  <a href="assets/paper/figure-6.png"><img src="assets/paper/figure-6.png" width="100%" alt="Original Figure 6 from the TRACE paper: visual comparisons across eight methods on Wan2.1, including adjacent frames and detail crops."></a>
</p>

</details>

## Release status

- [x] Project page
- [x] [Paper and supplementary material](https://github.com/libozhu03/TRACE/releases/tag/paper)
- [ ] Paper on arXiv
- [ ] Code and models

## 📎 Citation

The citation will be added after arXiv submission.
