import * as demo from '@/sanity/lib/demo';
// import OpenGraphInput from '@/sanity/schemaTypes/settings/OpenGraphInput';
import { CogIcon } from '@sanity/icons';
import { defineArrayMember, defineField, defineType } from 'sanity';

export const settingsType = defineType({
    name: 'settings',
    title: 'Settings',
    type: 'document',
    icon: CogIcon,
    preview: { select: { title: 'title', subtitle: 'description' } },
    // Uncomment below to have edits publish automatically as you type
    // liveEdit: true,
    fields: [
        defineField({
            name: 'title',
            description: 'This field is the title of your blog.',
            title: 'Title',
            type: 'string',
            initialValue: demo.title,
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'description',
            description:
                'Used both for the <meta> description tag for SEO, and the blog subheader.',
            title: 'Description',
            type: 'array',
            initialValue: demo.description,
            of: [
                defineArrayMember({
                    type: 'block',
                    options: {},
                    styles: [],
                    lists: [],
                    marks: {
                        decorators: [],
                        annotations: [
                            defineField({
                                type: 'object',
                                name: 'link',
                                fields: [
                                    {
                                        type: 'string',
                                        name: 'href',
                                        title: 'URL',
                                        validation: (rule) => rule.required(),
                                    },
                                ],
                            }),
                        ],
                    },
                }),
            ],
            validation: (rule) => rule.max(155).required(),
        }),
        // defineField({
        //     name: 'ogImage',
        //     title: 'Open Graph Image',
        //     description:
        //         'Used for social media previews when linking to the index page.',
        //     type: 'object',
        //     components: {
        //         input: OpenGraphInput as any,
        //     },
        //     fields: [
        //         defineField({
        //             name: 'title',
        //             title: 'Title',
        //             type: 'string',
        //             initialValue: demo.ogImageTitle,
        //         }),
        //     ],
        // }),
    ],
});