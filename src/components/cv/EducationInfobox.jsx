function EducationInfobox({ data }) {
  return (
    <div className="p-4 rounded-md bg-zinc-200 dark:bg-zinc-700 dark:text-zinc-200 dark:text-shadow backdrop-blur-sm grid justify-center">
      <div className="text-lg">{data.school}</div>
      <div className="text-xl font-bold">{data.name}</div>
      <div>
        {data.start} - {data.end}
      </div>
      {(data.degree || data.description) && (
        <hr className="my-1 border-[1px] border-black dark:border-zinc-200" />
      )}
      <div>{data.description && data.description}</div>
      <div>{data.degree && "degree: " + data.degree}</div>
    </div>
  );
}

export default EducationInfobox;
