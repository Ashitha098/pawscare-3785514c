
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				pawsblue: {
					50: '#eef7ff',
					100: '#d9edff',
					200: '#bce0ff',
					300: '#8ecefd',
					400: '#59b2f8',
					500: '#3896f3',
					600: '#2576e9',
					700: '#1d61d7',
					800: '#1e4eae',
					900: '#1e4488',
					950: '#172a53',
				},
				pawsorange: {
					50: '#fff8ed',
					100: '#ffefd6',
					200: '#ffdcac',
					300: '#ffc276',
					400: '#ff9e3c',
					500: '#fd8118',
					600: '#ee6209',
					700: '#c44a08',
					800: '#9c3a0e',
					900: '#7d310f',
					950: '#431607',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'bounce-slow': {
					'0%, 100%': { 
						transform: 'translateY(-5%)',
						animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)'
					},
					'50%': {
						transform: 'translateY(0)',
						animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'bounce-slow': 'bounce-slow 3s infinite'
			},
			fontFamily: {
				'cozy': ['Poppins', 'sans-serif'],
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
