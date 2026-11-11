<div align="center">

# TRACE

### Trajectory Synchronization for Training-Free<br>Resolution Extension in Video Generation

[Libo Zhu](https://www.libozhu.com/)¹ · Fan Li² · Zhixin Wang²<br>
Binglu Wang³ · Weisheng Dong⁴ · [Yulun Zhang](https://yulunzhang.com/)¹,*

¹ Shanghai Jiao Tong University &nbsp; ² Huawei Technologies Ltd.<br>
³ Northwest Polytechnical University &nbsp; ⁴ Xidian University

<sup>* Corresponding author</sup>

[**Project Page**](https://libozhu03.github.io/TRACE/) &nbsp; · &nbsp;
**arXiv — Coming soon** &nbsp; · &nbsp;
**Code — Coming soon**

</div>

<p align="center">
  <img src="docs/assets/teaser.webp" width="100%" alt="TRACE high-resolution video generation results from Figure 1 of the paper.">
</p>

## 📄 Abstract

More text-to-video models are available, but many remain limited to low resolutions. Training them for higher resolutions is costly, while existing training-free methods still struggle with fine detail, scene structure, and efficiency. We propose TRACE, a training-free method that synchronizes low- and high-resolution generation trajectories. During early denoising, TRACE aligns predicted scene content at corresponding noise levels. It computes high-resolution updates from low-resolution predictions and the current high-resolution state, without high-resolution model inference. The high-resolution trajectory retains fine-grained variation for generating new details. Local window attention then refines fine details in a shared high-resolution latent state. TRACE checks suspected duplicate subjects against the corresponding low-resolution layout and corrects selected regions and their solver history while preserving detail elsewhere. Experiments across all kinds of video generation backbones and resolutions show improved perceptual quality and text–video alignment over FreeSwim, a state-of-the-art training-free method, with 2.0–2.9× end-to-end speedups. Our code and models will be released at https://github.com/libozhu03/TRACE.

## ✨ Method

TRACE synchronizes low- and high-resolution generation trajectories without training. **Cross-scale trajectory synchronization (CSTS)** constructs early high-resolution updates from low-resolution predictions and the current high-resolution state, avoiding high-resolution model inference. Window attention then refines local detail on a shared latent state. **Trajectory-guided structural correction (TGSC)** identifies duplicated subjects using low-resolution references and corrects selected regions and their solver history while preserving detail elsewhere.

<p align="center">
  <img src="docs/assets/method.webp" width="100%" alt="TRACE framework from Figure 3 of the paper: CSTS, high-resolution inference, and TGSC.">
</p>

## 📊 Results

The paper evaluates 120 fixed prompt–reference pairs, with matched seeds and 81 frames at 16 FPS. TRACE improves perceptual quality and text–video alignment over FreeSwim across the three evaluated backbones.

| Backbone | Resolution | FreeSwim time (s) | TRACE time (s) | Speedup |
| :--- | :---: | ---: | ---: | ---: |
| Wan2.1-T2V-1.3B | 1920 × 1088 | 5,010 | **1,826** | **2.74×** |
| Wan2.2-T2V-A14B | 2560 × 1440 | 27,788 | **9,526** | **2.92×** |
| Bernini-R-1.3B | 1920 × 1088 | 5,708 | **2,831** | **2.02×** |

End-to-end timings from Table 1 and Section 4.2 of the paper, measured on one A800 GPU, including low-resolution sampling, VAE transfers, and structural correction.

<details>
<summary><b>Visual comparison at 1080p and 4K</b></summary>

<p align="center">
  <img src="docs/assets/paper/scaling.webp" width="100%" alt="Figure 2 of the paper: FreeSwim and TRACE on Wan2.1 at 1080p and 4K, with matched detail crops and timings.">
</p>

Figure 2 of the paper compares FreeSwim and TRACE on Wan2.1-T2V-1.3B at 1920 × 1080 and 3840 × 2160. Central panels show FreeSwim on the left and TRACE on the right; outer columns show the corresponding detail crops.

</details>

More quantitative comparisons, visual results, and ablations are available on the [project page](https://libozhu03.github.io/TRACE/).

## 📦 Release status

- [x] Project page
- [ ] Paper on arXiv
- [ ] Code and models

The code and models will be released here. The arXiv link and citation will be added after submission.
