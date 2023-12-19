function WorkInfobox({ data }) {
  return (
    <div className="md:p-2 lg:p-4 md:text-sm lg:text-lg rounded-md bg-zinc-200 dark:bg-zinc-700 dark:text-zinc-200 dark:text-shadow backdrop-blur-sm grid justify-center">
      <div className="md:text-md lg:text-lg">{data.company}</div>
      <div className="md:text-lg lg:text-xl font-bold">{data.job}</div>
      <div>
        {data.from} - {data.to}
      </div>
      {(data.description || data.points) && (
        <hr className="my-1 border-[1px] border-black dark:border-zinc-200" />
      )}
      <div>{data.description && data.description}</div>
      <ul>
        {data.points &&
          data.points.map((point, index) => <li key={index}>- {point}</li>)}
      </ul>
    </div>
  );
}

export default WorkInfobox;
