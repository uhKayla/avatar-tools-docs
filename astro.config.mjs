import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    integrations: [starlight({
        title: 'Avatar Tools',
        logo: {
            light: './src/assets/logo-light.png',
            dark: './src/assets/logo-dark.png',
            replacesTitle: true,
        },
        social: {
            github: 'https://github.com/uhKayla/AvatarTools',
        },
        customCss: [
            // Path to your Tailwind base styles:
            './src/tailwind.css',
        ],
        sidebar: [
            {
                label: 'Setup',
                link: '/setup'
            },
            {
                label: 'Reference',
                autogenerate: { directory: 'reference' },
            },
        ],
		}), tailwind({
        applyBaseStyles: false,
    })],
});