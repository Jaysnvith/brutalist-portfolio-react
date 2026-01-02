type TitleProp = {
  contents: string[];
};

function TitleBox({ contents }: TitleProp) {
  return (
    <h1 className="inline-flex items-center border-4 divide-x-4 text-4xl border-surface-fg divide-surface-fg">
      {contents.map((content) => (
        <span className="px-1 bg-surface text-surface-fg">{content}</span>
      ))}
    </h1>
  );
}

export default TitleBox;
