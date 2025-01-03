export const hero = {
    name: 'heroSec',
    type: 'document',
    title: 'Hero Section',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Image Title',
        },
        {
            name: 'image',
            type: 'image',
            title: 'Hero Image',
            options: {
                hotspot: true
              }
        }
    ]
}