

interface HeadingProps {
    title: string,
    description: string
}

//export const is used to export a value as the default export of a module, while export function is used to export a function as a named export of a module.

export const Heading: React.FC<HeadingProps> = ({
    title,
    description
  }) => {
    return ( 
      <div>
        <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
        <p className="text-sm text-muted-foreground">
          {description}
        </p>
      </div>
    );
  };