type TitleProp = {
  contents: string[];
};

function Title({ contents }: TitleProp) {
  return (
    <h1 className="flex items-center space-x-6 text-6xl">
      {contents.map((content) => (
        <span className="px-1 bg-zinc-900 text-zinc-100">{content}</span>
      ))}
    </h1>
  );
}

export default Title;
