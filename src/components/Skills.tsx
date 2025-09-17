const SKILLS = [
  'Python',
  'Django',
  'FastAPI',
  'JavaScript (ES6+)',
  'TypeScript',
  'React',
  'Node.js',
  'Express.js',
  'HTML & CSS',
  'SQL & NoSQL Databases',
  'Git & Version Control',
  'RESTful APIs',
  'Agile Methodologies',
  'Testing & Debugging',
  'Cloud Services (AWS, Google Cloud, Vercel)',
]

export default function Skills() {
  return (
    <article className="flex flex-col gap-y-4 print:gap-y-2 text-white print:text-black" id="skills">
      <ul aria-label="Skills" className="flex flex-wrap gap-1">
        {SKILLS.map((skill) => (
          <li className="bg-purple-600 border border-purple-400 px-1 py-0.5 rounded sansation-light text-xs">
            {skill}
          </li>
        ))}
      </ul>
    </article>
  )
}
