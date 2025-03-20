import { defineField, defineType } from 'sanity'

export const pageType = defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        defineField({
          name: 'metadata',
          title: 'Metadata',
          type: 'string',
          description: 'Short description for SEO purposes',
        }),
        defineField({
          name: 'metadatakeywords',
          title: 'Keywords',
          type: 'string',
          description: 'Keywords for SEO purposes (comma separated)',
        }),
      ],
    }),
  ],
})
