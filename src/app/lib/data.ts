export async function fetchRecipes() {
  try {

  const data = await fetch(
    'https://www.themealdb.com/api/json/v1/1/categories.php'
  );

    return data.json();
  } catch (error) {
    console.error('Fetch Error:', error);
    throw new Error('Failed to fetch categories');
  }
}
