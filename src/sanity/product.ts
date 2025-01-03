export const product = {
    name: 'product',
    type: 'document',
    title: 'Products',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Product Title',
        },
        {
            name: 'image',
            type: 'image',
            title: 'Product Image',
            options: {
                hotspot: true
              }
        },
        {
            name: 'price',
            type: 'string',
            title: 'Product Price',
        },
        {
            name: 'rate',
            type: 'string',
            title: 'Product Rate',
        },
    ]
}