export const createRenderChildText =
  (customDecoratorComponents) => (properties) => {
    return properties?.map(([text, decorations], i) => {
      if (!decorations) {
        return <React.Fragment key={i}>{text}</React.Fragment>;
      }

      return decorations.reduceRight((element, decorator) => {
        const renderText = () => {
          switch (decorator[0]) {
            case 'h':
              return (
                <span key={i} className={`notion-${decorator[1]}`}>
                  {element}
                </span>
              );
            case 'c':
              return (
                <code key={i} className="notion-inline-code">
                  {element}
                </code>
              );
            case 'b':
              return <b key={i}>{element}</b>;
            case 'i':
              return <em key={i}>{element}</em>;
            case 's':
              return <s key={i}>{element}</s>;
            case 'a':
              return (
                <a className="notion-link" href={decorator[1]} key={i}>
                  {element}
                </a>
              );

            default:
              return <React.Fragment key={i}>{element}</React.Fragment>;
          }
        };

        const CustomComponent = customDecoratorComponents?.[decorator[0]];

        if (CustomComponent) {
          const props = decorator[1]
            ? {
                decoratorValue: decorator[1],
              }
            : {};

          return (
            <CustomComponent key={i} {...props} renderComponent={renderText}>
              {text}
            </CustomComponent>
          );
        }

        return renderText();
      }, <>{text}</>);
    });
  };
