import type { GiscusProps } from '@giscus/react'
import type { SocialSite } from '@/lib/social'
import type { GitHub } from '@/types'
import { colors } from '@/lib/colors'

interface SiteConfig {
  author: string
  email: string
  themeColor: string
  url: string
  socials: Record<SocialSite, string>
  maxLandingStars: number
  minRepoStars: number
  contentPath: string
  githubData: GitHub
  giscus?: GiscusProps
}

const siteConfig: SiteConfig = {
  author: 'Sabertaz',
  email: 'sabertazimi@gmail.com',
  themeColor: colors.black,
  url: 'https://blog.tazimi.dev',
  socials: {
    github: 'sabertaz',
    x: 'sabertazimi',
    facebook: 'sabertazimi',
    weibo: 'sabertazimi',
    rss: 'sabertaz',
  },
  maxLandingStars: 800,
  minRepoStars: 3,
  contentPath: 'content',
  githubData: {
    profile: {
      username: 'sabertaz',
      name: 'Sabertaz',
      avatar: 'https://avatars.githubusercontent.com/u/12670482?v=4',
      bio: 'Web Developer',
      location: 'Undefined',
      url: 'https://github.com/sabertaz',
      followers: 72,
      followersUrl: 'https://github.com/sabertaz?tab=followers',
      following: 206,
      followingUrl: 'https://github.com/sabertaz?tab=following',
      publicRepos: 15,
      publicGists: 0,
      totalStars: 175,
      createDate: 'Sat May 30 2015',
    },
    repos: [
      {
        name: 'blog',
        stars: 42,
        language: 'TypeScript',
        repoUrl: 'https://github.com/sabertaz/blog',
      },
      {
        name: 'awesome-notes',
        stars: 44,
        language: 'TypeScript',
        repoUrl: 'https://github.com/sabertaz/awesome-notes',
      },
      {
        name: 'hust-lab',
        stars: 31,
        language: 'C',
        repoUrl: 'https://github.com/sabertaz/hust-lab',
      },
      {
        name: 'LaTeX-snippets',
        stars: 15,
        language: 'JSON',
        repoUrl: 'https://github.com/sabertaz/LaTeX-snippets',
      },
      {
        name: 'dragon-zsh-theme',
        stars: 13,
        language: 'Shell',
        repoUrl: 'https://github.com/sabertaz/dragon-zsh-theme',
      },
      {
        name: 'bod',
        stars: 5,
        language: 'TypeScript',
        repoUrl: 'https://github.com/sabertaz/bod',
      },
    ],
  },
}

export { siteConfig }
export type { SiteConfig }
