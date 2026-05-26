# 画像生成プロンプト & Storyset イラスト ガイド

このサイトに使用する写真・イラストの「生成プロンプト」と「ダウンロード先」をまとめたドキュメントです。
現在は SVG プレースホルダーが表示されています。本番では下記の通り差し替えてください。

---

## 1. 写真（Photo）— AI画像生成用プロンプト

Midjourney / DALL·E / Stable Diffusion / Imagen / Firefly などに貼り付けて使用できます。
**スタイル統一のキーワード**：`cinematic lighting, photorealistic, sharp focus, industrial aesthetic, soft cool tone, 8k, magazine quality`

### 1-1. images/hero.svg → hero.jpg（横長 1600×900）
**用途**：ファーストビューの大型写真。トリミングは右側 65% 表示。

```
A confident Japanese male factory engineer in his 30s wearing a navy blue work uniform, a white safety helmet, and protective gloves, standing in a modern precision manufacturing plant. He is inspecting a precision-machined aluminum component with a digital caliper. Background: clean factory floor with CNC machining centers slightly out of focus, soft cool blue and teal industrial lighting, large windows letting in natural daylight. Wide shot, shallow depth of field, slight low angle to convey trust and pride. Cinematic, photorealistic, 8k, magazine quality, soft cool color grade. Composition: subject placed on the right two-thirds of the frame, ample negative space on the left for text overlay.
```

### 1-2. images/about.svg → about.jpg（横長 1000×800）
**用途**：ABOUT セクション右側、対角クリップで切り取られる写真。

```
Two Japanese skilled factory technicians collaborating on precision metal parts at a workbench, viewed from a three-quarter angle. Both wear navy uniforms and white helmets. They are focused on measuring a polished stainless-steel component with precision instruments. Workshop background with subtle bokeh of industrial machinery, neutral cool tones with hints of teal. Documentary photography style, natural soft side-light, photorealistic, sharp focus on the hands and the part, shallow depth of field.
```

### 1-3. images/service-1.svg → service-1.jpg（精密部品加工 / 600×430）

```
Close-up of a 5-axis CNC machining center cutting a polished aluminum aerospace-grade component, blue coolant mist gently spraying, sparks subtle. Clean modern factory environment. Cool industrial blue lighting with teal highlights. Photorealistic, sharp focus on the cutting tool, motion blur on chips. Magazine-quality industrial photography.
```

### 1-4. images/service-2.svg → service-2.jpg（金型製造 / 600×430）

```
Top-down hero shot of a precision injection-mold core and cavity on a clean workbench, polished mirror finish, tooling marks visible. Surrounding tools: micrometers, gauge blocks, blueprints. Cool overhead daylight, very crisp focus, photorealistic, neutral cool color palette, industrial editorial style.
```

### 1-5. images/service-3.svg → service-3.jpg（産業機器組立 / 600×430）

```
A Japanese assembly technician in a clean uniform carefully assembling an industrial robot arm or large machine subsystem in a bright assembly hall. Multiple finished units behind in soft bokeh. Cool factory daylight, photorealistic, sharp focus on the hands and tool, documentary industrial photography.
```

### 1-6. images/work-1.svg → work-1.jpg（アルミ精密筐体加工）

```
Hero studio shot of a CNC-machined anodized aluminum precision enclosure on a dark gray background, brushed surface, perfect chamfers and bores. Soft top-down rim lighting. Product photography, photorealistic.
```

### 1-7. images/work-2.svg → work-2.jpg（医療機器用金型製造）

```
Macro photo of a medical-grade stainless-steel injection mold halves separated on a white background, mirror-polished cavities visible, soft studio lighting, ultra-sharp focus. Clean editorial product photography.
```

### 1-8. images/work-3.svg → work-3.jpg（搬送装置ユニット組立）

```
A finished industrial conveyor / transport unit module standing in a clean assembly bay. Anodized aluminum framework, servo motors, neat cabling. Cool daylight, wide shot, slight low angle, photorealistic.
```

### 1-9. images/work-4.svg → work-4.jpg（半導体製造装置部品）

```
Close-up of a precision-machined stainless-steel vacuum chamber component for semiconductor equipment, mirror-finished flanges, on a clean neutral background. Studio lighting, photorealistic, ultra-sharp.
```

### 1-10. images/work-5.svg → work-5.jpg（自動車部品プレス金型）

```
Large automotive sheet-metal press die in a tooling shop, polished cavity, blueprints partially visible on a side bench, cool daylight from skylights, wide shot, photorealistic industrial photography.
```

### 1-11. images/work-6.svg → work-6.jpg（産業ロボット架台組立）

```
A welded and machined steel base frame for an industrial robot, being inspected by a technician with a measurement tool. Clean assembly area, cool tone, photorealistic, three-quarter angle wide shot.
```

### 1-12. images/contact-bg.svg → contact-bg.jpg（CONTACT 背景 / 1600×600）

```
Wide cinematic shot of a Japanese factory technician in profile looking out a large factory window at sunrise. Soft warm-cool light wash. Background slightly blurred. Used as a darkened tinted background, so heavy contrast is fine. Photorealistic, cinematic, editorial.
```

---

## 2. イラスト（Illustration）— Storyset からダウンロード

> https://storyset.com — 無料／商用利用可のベクターイラストサイト。
> 各リンクからスタイルを選択し、色を変更（推奨：プライマリーカラー `#1AAFB0`）してダウンロードしてください。

このサイトでは現状イラストは使用していませんが、追加時の推奨は以下：

| 用途 | Storyset 検索キーワード | おすすめ URL |
|---|---|---|
| 採用ページのヒーロー | `Engineer`, `Team work`, `Manufacturing` | https://storyset.com/work |
| 会社概要のミッション | `Mission`, `Vision`, `Goals` | https://storyset.com/business |
| お問い合わせフォーム横 | `Contact us`, `Customer support` | https://storyset.com/people |
| 採用フローの説明 | `Process`, `Workflow`, `Steps` | https://storyset.com/business |
| お知らせ／ブログ | `News`, `Announcement` | https://storyset.com/communication |

**Storyset カスタマイズ手順**：
1. Storyset でイラストを開く
2. 右側の「Customize」パネルで Background を transparent、Color を `#1AAFB0`（メインティール）に変更
3. SVG または PNG（透過）でダウンロード
4. `/illustrations/` フォルダに保存（例：`illustrations/recruit-hero.svg`）

---

## 3. 差し替え手順

1. 上記プロンプトで写真を生成（または社内素材を用意）
2. `/images/` に同名で `.jpg` として保存（例：`hero.jpg`）
3. `index.html` 内の `images/xxx.svg` を `images/xxx.jpg` に置換
4. `css/styles.css` 内の `contact-bg.svg` も同様に `.jpg` に置換

カラーグレーディング（推奨）：
- 全体的に **cool teal (#1AAFB0)** をシャドウに、ハイライトは **warm white** にすると本サイトのトーンと統一されます
- 彩度はやや低め、コントラストは中〜高め
- 全画像で色温度をそろえると業界ブランドサイトらしい一貫性が出ます
