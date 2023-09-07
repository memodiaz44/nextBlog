import { getCategories } from '../functions/graphqlUtils'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import 'tailwindcss/tailwind.css'



export const Sidebar = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
      const fetchCategories = async () => {
        const fetchedCategories = await getCategories();
        setCategories(fetchedCategories);
      };
  
      fetchCategories();
    }, []);

    console.log({categories})

    return(
        <div className='  bg-gray-50 px-2 shadow-sm w-auto flex-shrink-0	'>
        <h1>Categories</h1>
        <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>

        {categories.map(category => (
            <Link 
            className='	'
            href={`/${category.slug}` } 
            key={category.slug}>
                    <div>
                        <h3 className='text-blue-600	hover:text-blue-300	' >{category.name}</h3>
                    </div>
               
            </Link>
        ))}
    </div>
    )



}