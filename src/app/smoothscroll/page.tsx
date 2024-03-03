import Description from '@/components/smooth-scroll-page/components/description'
import IntroWithAnimationFramer from '@/components/smooth-scroll-page/components/intro-with-motion'
import ProjectsWithFramer from '@/components/smooth-scroll-page/components/projects/projects-with-framer'

const PageSmoothScroll = () => {
  return (
    <main>
      {/* <Intro /> */}
      <IntroWithAnimationFramer />
      <Description />
      {/* <Projects /> */}
      <ProjectsWithFramer />
    </main>
  )
}

export default PageSmoothScroll
