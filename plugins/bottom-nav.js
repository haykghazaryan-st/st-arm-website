module.exports = function bottomNav(config) {
    return {
        '.bottom-nav': {
            padding: `${config('theme.spacing.12')} 0`,
            marginTop: config('theme.spacing.15'),
            borderTopWidth: config('theme.borderWidth.default'),
            borderTopColor: config('theme.colors.gray'),
            boxShadow: `0px -1px 0px ${config('theme.colors.lightGray')}`,

            'nav': {
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',

                'a': {
                    fontWeight: config('theme.fontWeight.bold'),
                    lineHeight: '24px',
                    textTransform: 'uppercase'
                }
            }
        }
    }
};
