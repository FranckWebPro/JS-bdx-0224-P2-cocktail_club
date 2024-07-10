import CocktailsSection from "../components/CocktailsSection";
import SeasonCard from "../components/SeasonCard";
import SectionAllCocktails from "../components/SectionAllCocktails";

function HomePage() {
  return (
    <main className="homePage">
      <section className="season-section">
        <SeasonCard season="Spring" />
        <SeasonCard season="Summer" />
        <SeasonCard season="Autumn" />
        <SeasonCard season="Winter" />
      </section>
      <CocktailsSection
        idName="popularcocktails"
        source="../images/winter12.webp"
        title="POPULAR COCKTAILS"
        content="Embark on a journey through our selection of popular cocktails, where classic favorites meet innovative twists. From timeless classics like martinis to trendy creations like espresso martinis, discover the iconic flavors that have captivated cocktail enthusiasts worldwide."
        path="popularcocktails"
        isNotReverse
      />
      <CocktailsSection
        idName="surpriseCocktail"
        source="../images/winter5.webp"
        title="SURPRISE COCKTAIL"
        content="Experience the thrill of surprise with our random cocktail selection. Each sip unveils a new adventure, from exotic concoctions to unexpected flavor combinations. Let your taste buds wander and discover exciting blends that promise to intrigue and delight."
        path="surprisecocktail"
        isReverse
      />
      <CocktailsSection
        idName="mocktails"
        source="../images/mocktail.webp"
        title="MOCKTAILS"
        content="Dive into the tantalizing realm of non-alcoholic cocktails, where every sip is a burst of flavor and creativity. From fruity mocktails to sophisticated alcohol-free blends, indulge in refreshing beverages crafted to perfection, offering a delightful experience for every palate"
        path="mocktails"
        isNotReverse
      />
      <SectionAllCocktails />
    </main>
  );
}

export default HomePage;
