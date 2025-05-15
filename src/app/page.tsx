import Header from '@/app/components/header'
import Hero from '@/app/components/hero'
import Recipes from '@/app/components/recipes'

export default function Home() {
  return (
    <div className="main-page">
      <Header/>
      <Hero/>
      <Recipes/>
    </div>
  );
}
