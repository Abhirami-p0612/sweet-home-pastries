export default function Story(
                    {
                    currentCake,
                }
) {
    return (
        <div 
                id="Story" 
                key={currentCake}
                className="page-story">
            <div className="container-s">
                <h1>Our Story</h1>
                <p>At Pastries, we believe that every dessert tells a story. What begins as a handful of carefully selected ingredients transforms into a creation designed to bring joy, comfort, and celebration to every occasion. Our passion for baking goes beyond recipes—it's about crafting experiences that leave a lasting impression.

Inspired by timeless flavors and modern artistry, each cake in our collection is thoughtfully designed to balance taste, texture, and elegance. From the richness of chocolate to the delicate charm of handcrafted decorations, every detail is created with care and precision. We believe that a dessert should delight not only the palate but also the eyes.

Our journey is driven by a simple philosophy: great moments deserve exceptional desserts. Whether you're celebrating a milestone, gathering with loved ones, or simply treating yourself to something special, our creations are designed to make those moments unforgettable.

Every layer, every flavor, and every finishing touch reflects our commitment to quality and craftsmanship. Through creativity, passion, and dedication, we continue to transform ordinary ingredients into extraordinary experiences—one slice at a time.
</p>
            </div>
        </div>
    )
}