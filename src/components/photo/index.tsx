
export const Photo = ({img, index, style, ...props}: any) => {
    const inlineStyles = {
        opacity: 0,
        borderRadius: '8px',
        WebkitUserDrag: 'none',
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        ...(index === 0 ? { height: '300px' } : { height: '140px' }),
        ...(index === 0 ? { width: '100%' } : null),
        ...style,
    };

    return <div style={inlineStyles} {...props} />;
};

export default Photo;
