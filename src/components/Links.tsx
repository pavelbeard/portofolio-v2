import { GlobeIcon, MailIcon } from 'lucide-react'
import { SiGithub as Github } from '@icons-pack/react-simple-icons'
import { LinkedInLogoIcon } from '@radix-ui/react-icons'

const LINKS = [
  {
    href: 'https://www.google.com/maps/place/Valencia',
    icon: <GlobeIcon className="text-white size-4" size={16} />,
  },
  {
    href: 'https://github.com/pavelbeard',
    icon: <Github className="text-white size-4" size={16} />,
  },
  {
    href: 'https://linkedin.com/in/pavelbeard',
    icon: <LinkedInLogoIcon className="text-white size-4" />,
  },
  {
    href: 'mailto:pavelborodin0095@gmail.com',
    icon: <MailIcon className="text-white size-4" />,
  },
]

export default function Links() {
  return (
    <div
      className="flex print:flex-col items-center print:items-start gap-2"
      aria-label="Social links"
    >
      {LINKS.map(({ href, icon }) => (
        <>
          <p className="hidden print:inline-block">
            <span className="">
              {href
                .replace('https://', '')
                .replace('www.', '')
                .replace('mailto:', '')}
            </span>
          </p>
          <a
            key={href}
            className="print:hidden inline-block bg-purple-600 border border-purple-400 hover:bg-purple-400 hover:border-purple-200 p-1 rounded"
            href={href}
            target="_blank"
          >
            {icon}
          </a>
        </>
      ))}
    </div>
  )
}
