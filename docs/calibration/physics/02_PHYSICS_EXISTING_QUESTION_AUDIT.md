# Physics Existing-Question Audit (current `functions/_bank.js`)

36 questions, 9 topics. Every answer was **independently recomputed** — all are arithmetically correct and academically sound. The main issues are (a) the missing **Light & Optics** topic, (b) `difficulty` labels never used, (c) no metadata (id/marks/tolerance/misconception), (d) some wording that lightly echoes generic exam phrasing (originality-safe but re-authored in candidates).

Action codes: KEEP · REVISE_MINOR (re-tag + metadata, keep content) · REVISE_MAJOR · REPLACE · REMOVE.

## Per-question verdicts (position → new topic)

| # | Current topic | Type | Ans verified | Assessed diff | Action | Note |
|--:|---|---|:--:|---|---|---|
|1|Motion & Forces|work|a=2 ✓|standard|REVISE_MINOR|v–t graph; keep as T1-S |
|2|Motion & Forces|work|1.6 ✓|standard(app)|REVISE_MINOR|resultant→F=ma; T1-A |
|3|Motion & Forces|mcq|B ✓|standard|KEEP→REVISE_MINOR|crumple zone; could move to foundation? keep standard |
|4|Motion & Forces|work|5500 ✓|upper|REVISE_MINOR|km/h→m/s; T1-U |
|5|Moments/Density/Pressure|work|8 ✓|foundation|REVISE_MINOR|density; T2-F |
|6|Moments/Density/Pressure|work|20 ✓|standard|REVISE_MINOR|moments; T2-S |
|7|Moments/Density/Pressure|work|82400 ✓|standard(app)|REVISE_MINOR|P=hρg; T2-A |
|8|Moments/Density/Pressure|work|8000 ✓|upper|REVISE_MINOR|cm³→m³; T2-U |
|9|Energy/Work/Power|work|60 ✓|foundation|REVISE_MINOR|GPE; T3-F |
|10|Energy/Work/Power|work|10 ✓|standard|REVISE_MINOR|GPE→KE; T3-S |
|11|Energy/Work/Power|work|200 ✓|standard(app)|REVISE_MINOR|power; T3-A |
|12|Energy/Work/Power|work|75000 ✓|upper|REVISE_MINOR|efficiency; T3-U |
|13|Thermal|mcq|Radiation ✓|foundation|REVISE_MINOR|T4-F |
|14|Thermal|work|420000 ✓|standard|REVISE_MINOR|Q=mcΔθ; T4-S |
|15|Thermal|mcq|Matt black ✓|standard(app)|REVISE_MINOR|T4-A |
|16|Thermal|work|189 ✓|upper|REVISE_MINOR|kettle; T4-U |
|17|Waves,Light&Sound|work|4 ✓|foundation|REVISE_MINOR|v=fλ; → **Waves&Sound** T5-F |
|18|Waves,Light&Sound|mcq|X ✓|standard|REVISE_MINOR|amplitude; T5-S |
|19|Waves,Light&Sound|work|0.68 ✓|standard(app)|REVISE_MINOR|sound λ; T5-A |
|20|Waves,Light&Sound|work|3 ✓|upper|REVISE_MINOR|radio λ; T5-U |
|—|**Light & Optics**|—|—|—|**REPLACE×4**|**No current questions — 4 NEW (T6-F/S/A/U)** |
|21|Electricity|work|3 ✓|foundation|REVISE_MINOR|Ohm; T7-F |
|22|Electricity|work|1 ✓|standard|REVISE_MINOR|series; T7-S |
|23|Electricity|mcq|13A ✓|standard(app)|REVISE_MINOR|fuse; T7-A |
|24|Electricity|work|6 ✓|upper|REVISE_MINOR|parallel; T7-U |
|25|Magnetism|mcq|Repel ✓|foundation|REVISE_MINOR|T8-F |
|26|Magnetism|mcq|Step-down ✓|standard|REVISE_MINOR|T8-S |
|27|Magnetism|work|11.5 ✓|standard(app)|REVISE_MINOR|transformer; T8-A |
|28|Magnetism|work|0.5 ✓|upper|REVISE_MINOR|ideal transformer; T8-U |
|29|Radioactivity|mcq|Alpha ✓|foundation|REVISE_MINOR|T9-F |
|30|Radioactivity|work|100 ✓|standard|REVISE_MINOR|half-life; T9-S |
|31|Radioactivity|mcq|same p,diff n ✓|standard(app)|REVISE_MINOR|isotopes; T9-A |
|32|Radioactivity|work|75 ✓|upper|REVISE_MINOR|half-lives→time; T9-U |
|33|Earth & Space|mcq|distance ✓|foundation|REVISE_MINOR|light-year; T10-F |
|34|Earth & Space|work|1.5e11 ✓|standard|REVISE_MINOR|d=vt; T10-S |
|35|Earth & Space|mcq|Galaxy ✓|standard(app)|REVISE_MINOR|scale; T10-A |
|36|Earth & Space|work|9.45e15 ✓|upper|REVISE_MINOR|light-year calc; T10-U |

## Topic-set analysis
- **Coverage gap:** Light & Optics (LO1 ray diagrams/refraction/lenses) entirely absent → 4 new questions required.
- **Difficulty distribution:** the current bank already follows 1 foundation / 2 standard / 1 hard per topic, which maps cleanly onto the new F/S/A/U scheme. Good.
- **Type balance:** healthy mix of calculation + concept MCQ. No fragile free-text. No over-reliance on recall.
- **Redundant skills:** none major. Two "standard-form multiplication" items (radio λ, light-year) are in different topics — acceptable.
- **Fragile marking:** none — all numeric answers are clean and unit-strippable; MCQs unambiguous.
- **Originality:** all re-authored fresh in candidates with new numbers/contexts to guarantee independence (see originality report).

**Net:** 32 REVISE_MINOR (retain content, add metadata, re-tag, redistribute Waves/Light) + 4 NEW (Light & Optics) + fresh re-authoring of numbers/contexts → 40.
