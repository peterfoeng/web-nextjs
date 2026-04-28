/* eslint-disable */
export type Token = `aspectRatios.${AspectRatioToken}` | `borders.${BorderToken}` | `easings.${EasingToken}` | `radii.${RadiusToken}` | `fontWeights.${FontWeightToken}` | `lineHeights.${LineHeightToken}` | `fonts.${FontToken}` | `letterSpacings.${LetterSpacingToken}` | `fontSizes.${FontSizeToken}` | `shadows.${ShadowToken}` | `blurs.${BlurToken}` | `spacing.${SpacingToken}` | `sizes.${SizeToken}` | `animations.${AnimationToken}` | `colors.${ColorToken}` | `durations.${DurationToken}` | `zIndex.${ZIndexToken}` | `breakpoints.${BreakpointToken}`

export type ColorPalette = "black" | "white" | "fg" | "border" | "error" | "orange" | "orange.solid.bg" | "orange.solid" | "orange.solid.fg" | "orange.subtle.bg" | "orange.subtle" | "orange.subtle.fg" | "orange.surface.bg" | "orange.surface" | "orange.surface.border" | "orange.surface.fg" | "orange.outline" | "orange.outline.bg" | "orange.outline.border" | "orange.outline.fg" | "orange.plain" | "orange.plain.bg" | "orange.plain.fg" | "gray" | "gray.solid.bg" | "gray.solid" | "gray.solid.fg" | "gray.subtle.bg" | "gray.subtle" | "gray.subtle.fg" | "gray.surface.bg" | "gray.surface" | "gray.surface.border" | "gray.surface.fg" | "gray.outline" | "gray.outline.bg" | "gray.outline.border" | "gray.outline.fg" | "gray.plain" | "gray.plain.bg" | "gray.plain.fg" | "red" | "red.solid.bg" | "red.solid" | "red.solid.fg" | "red.subtle.bg" | "red.subtle" | "red.subtle.fg" | "red.surface.bg" | "red.surface" | "red.surface.border" | "red.surface.fg" | "red.outline" | "red.outline.bg" | "red.outline.border" | "red.outline.fg" | "red.plain" | "red.plain.bg" | "red.plain.fg" | "green" | "green.solid.bg" | "green.solid" | "green.solid.fg" | "green.subtle.bg" | "green.subtle" | "green.subtle.fg" | "green.surface.bg" | "green.surface" | "green.surface.border" | "green.surface.fg" | "green.outline" | "green.outline.bg" | "green.outline.border" | "green.outline.fg" | "green.plain" | "green.plain.bg" | "green.plain.fg"

export type AspectRatioToken = "square" | "landscape" | "portrait" | "wide" | "ultrawide" | "golden"

export type BorderToken = "none"

export type EasingToken = "default" | "linear" | "in" | "out" | "in-out"

export type RadiusToken = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "full" | "l1" | "l2" | "l3"

export type FontWeightToken = "thin" | "extralight" | "light" | "normal" | "medium" | "semibold" | "bold" | "extrabold" | "black"

export type LineHeightToken = "none" | "tight" | "snug" | "normal" | "relaxed" | "loose"

export type FontToken = "sans" | "serif" | "mono"

export type LetterSpacingToken = "tighter" | "tight" | "normal" | "wide" | "wider" | "widest"

export type FontSizeToken = "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl"

export type ShadowToken = "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "inset-2xs" | "inset-xs" | "inset-sm" | "inset"

export type BlurToken = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl"

export type SpacingToken = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "14" | "16" | "20" | "24" | "28" | "32" | "36" | "40" | "44" | "48" | "52" | "56" | "60" | "64" | "72" | "80" | "96" | "0.5" | "1.5" | "2.5" | "3.5" | "4.5" | "5.5" | "-1" | "-2" | "-3" | "-4" | "-5" | "-6" | "-7" | "-8" | "-9" | "-10" | "-11" | "-12" | "-14" | "-16" | "-20" | "-24" | "-28" | "-32" | "-36" | "-40" | "-44" | "-48" | "-52" | "-56" | "-60" | "-64" | "-72" | "-80" | "-96" | "-0.5" | "-1.5" | "-2.5" | "-3.5" | "-4.5" | "-5.5"

export type SizeToken = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "14" | "16" | "20" | "24" | "28" | "32" | "36" | "40" | "44" | "48" | "52" | "56" | "60" | "64" | "72" | "80" | "96" | "0.5" | "1.5" | "2.5" | "3.5" | "4.5" | "5.5" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "prose" | "full" | "min" | "max" | "fit" | "breakpoint-sm" | "breakpoint-md" | "breakpoint-lg" | "breakpoint-xl" | "breakpoint-2xl"

export type AnimationToken = "spin" | "ping" | "pulse" | "bounce"

export type ColorToken = "black" | "black.a1" | "black.a2" | "black.a3" | "black.a4" | "black.a5" | "black.a6" | "black.a7" | "black.a8" | "black.a9" | "black.a10" | "black.a11" | "black.a12" | "white" | "white.a1" | "white.a2" | "white.a3" | "white.a4" | "white.a5" | "white.a6" | "white.a7" | "white.a8" | "white.a9" | "white.a10" | "white.a11" | "white.a12" | "fg.default" | "fg.muted" | "fg.subtle" | "border" | "error" | "orange.1" | "orange.2" | "orange.3" | "orange.4" | "orange.5" | "orange.6" | "orange.7" | "orange.8" | "orange.9" | "orange.10" | "orange.11" | "orange.12" | "orange.a1" | "orange.a2" | "orange.a3" | "orange.a4" | "orange.a5" | "orange.a6" | "orange.a7" | "orange.a8" | "orange.a9" | "orange.a10" | "orange.a11" | "orange.a12" | "orange.solid.bg" | "orange.solid.bg.hover" | "orange.solid.fg" | "orange.subtle.bg" | "orange.subtle.bg.hover" | "orange.subtle.bg.active" | "orange.subtle.fg" | "orange.surface.bg" | "orange.surface.bg.active" | "orange.surface.border" | "orange.surface.border.hover" | "orange.surface.fg" | "orange.outline.bg.hover" | "orange.outline.bg.active" | "orange.outline.border" | "orange.outline.fg" | "orange.plain.bg.hover" | "orange.plain.bg.active" | "orange.plain.fg" | "gray.1" | "gray.2" | "gray.3" | "gray.4" | "gray.5" | "gray.6" | "gray.7" | "gray.8" | "gray.9" | "gray.10" | "gray.11" | "gray.12" | "gray.a1" | "gray.a2" | "gray.a3" | "gray.a4" | "gray.a5" | "gray.a6" | "gray.a7" | "gray.a8" | "gray.a9" | "gray.a10" | "gray.a11" | "gray.a12" | "gray.solid.bg" | "gray.solid.bg.hover" | "gray.solid.fg" | "gray.subtle.bg" | "gray.subtle.bg.hover" | "gray.subtle.bg.active" | "gray.subtle.fg" | "gray.surface.bg" | "gray.surface.bg.hover" | "gray.surface.bg.active" | "gray.surface.border" | "gray.surface.border.hover" | "gray.surface.fg" | "gray.outline.bg.hover" | "gray.outline.bg.active" | "gray.outline.border" | "gray.outline.fg" | "gray.plain.bg.hover" | "gray.plain.bg.active" | "gray.plain.fg" | "red.1" | "red.2" | "red.3" | "red.4" | "red.5" | "red.6" | "red.7" | "red.8" | "red.9" | "red.10" | "red.11" | "red.12" | "red.a1" | "red.a2" | "red.a3" | "red.a4" | "red.a5" | "red.a6" | "red.a7" | "red.a8" | "red.a9" | "red.a10" | "red.a11" | "red.a12" | "red.solid.bg" | "red.solid.bg.hover" | "red.solid.fg" | "red.subtle.bg" | "red.subtle.bg.hover" | "red.subtle.bg.active" | "red.subtle.fg" | "red.surface.bg" | "red.surface.bg.active" | "red.surface.border" | "red.surface.border.hover" | "red.surface.fg" | "red.outline.bg.hover" | "red.outline.bg.active" | "red.outline.border" | "red.outline.fg" | "red.plain.bg.hover" | "red.plain.bg.active" | "red.plain.fg" | "green.1" | "green.2" | "green.3" | "green.4" | "green.5" | "green.6" | "green.7" | "green.8" | "green.9" | "green.10" | "green.11" | "green.12" | "green.a1" | "green.a2" | "green.a3" | "green.a4" | "green.a5" | "green.a6" | "green.a7" | "green.a8" | "green.a9" | "green.a10" | "green.a11" | "green.a12" | "green.solid.bg" | "green.solid.bg.hover" | "green.solid.fg" | "green.subtle.bg" | "green.subtle.bg.hover" | "green.subtle.bg.active" | "green.subtle.fg" | "green.surface.bg" | "green.surface.bg.active" | "green.surface.border" | "green.surface.border.hover" | "green.surface.fg" | "green.outline.bg.hover" | "green.outline.bg.active" | "green.outline.border" | "green.outline.fg" | "green.plain.bg.hover" | "green.plain.bg.active" | "green.plain.fg" | "colorPalette" | "colorPalette.a1" | "colorPalette.a2" | "colorPalette.a3" | "colorPalette.a4" | "colorPalette.a5" | "colorPalette.a6" | "colorPalette.a7" | "colorPalette.a8" | "colorPalette.a9" | "colorPalette.a10" | "colorPalette.a11" | "colorPalette.a12" | "colorPalette.default" | "colorPalette.muted" | "colorPalette.subtle" | "colorPalette.1" | "colorPalette.2" | "colorPalette.3" | "colorPalette.4" | "colorPalette.5" | "colorPalette.6" | "colorPalette.7" | "colorPalette.8" | "colorPalette.9" | "colorPalette.10" | "colorPalette.11" | "colorPalette.12" | "colorPalette.solid.bg" | "colorPalette.bg" | "colorPalette.solid.bg.hover" | "colorPalette.bg.hover" | "colorPalette.hover" | "colorPalette.solid.fg" | "colorPalette.fg" | "colorPalette.subtle.bg" | "colorPalette.subtle.bg.hover" | "colorPalette.subtle.bg.active" | "colorPalette.bg.active" | "colorPalette.active" | "colorPalette.subtle.fg" | "colorPalette.surface.bg" | "colorPalette.surface.bg.active" | "colorPalette.surface.border" | "colorPalette.border" | "colorPalette.surface.border.hover" | "colorPalette.border.hover" | "colorPalette.surface.fg" | "colorPalette.outline.bg.hover" | "colorPalette.outline.bg.active" | "colorPalette.outline.border" | "colorPalette.outline.fg" | "colorPalette.plain.bg.hover" | "colorPalette.plain.bg.active" | "colorPalette.plain.fg" | "colorPalette.surface.bg.hover"

export type DurationToken = "fastest" | "faster" | "fast" | "normal" | "slow" | "slower" | "slowest"

export type ZIndexToken = "hide" | "base" | "docked" | "dropdown" | "sticky" | "banner" | "overlay" | "modal" | "popover" | "skipLink" | "toast" | "tooltip"

export type BreakpointToken = "sm" | "md" | "lg" | "xl" | "2xl"

export type Tokens = {
		aspectRatios: AspectRatioToken
		borders: BorderToken
		easings: EasingToken
		radii: RadiusToken
		fontWeights: FontWeightToken
		lineHeights: LineHeightToken
		fonts: FontToken
		letterSpacings: LetterSpacingToken
		fontSizes: FontSizeToken
		shadows: ShadowToken
		blurs: BlurToken
		spacing: SpacingToken
		sizes: SizeToken
		animations: AnimationToken
		colors: ColorToken
		durations: DurationToken
		zIndex: ZIndexToken
		breakpoints: BreakpointToken
} & { [token: string]: never }

export type TokenCategory = "aspectRatios" | "zIndex" | "opacity" | "colors" | "fonts" | "fontSizes" | "fontWeights" | "lineHeights" | "letterSpacings" | "sizes" | "cursor" | "shadows" | "spacing" | "radii" | "borders" | "borderWidths" | "durations" | "easings" | "animations" | "blurs" | "gradients" | "breakpoints" | "assets"