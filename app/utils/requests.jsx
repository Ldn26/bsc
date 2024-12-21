export async function getAuthorsData() {
    try {
      const response = await fetch('/api/authors', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error(`Failed to fetch authors data: ${response.statusText}`);
      }
  
      const data = await response.json(); // Assuming the response is JSON
      return data;
    } catch (error) {
      console.error('Error fetching authors data:', error);
      throw error; // Re-throw the error so the caller can handle it
    }
  }
  