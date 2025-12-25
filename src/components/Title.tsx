type TitleProp = {
  contents: string[];
};

function Title({ contents }: TitleProp) {
  return (
    <h1 className="flex items-center space-x-6 text-6xl">
      {contents.map((content) => (
        <span className="px-1 bg-surface text-surface-fg">{content}</span>
      ))}
    </h1>
  );
}

export default Title;
