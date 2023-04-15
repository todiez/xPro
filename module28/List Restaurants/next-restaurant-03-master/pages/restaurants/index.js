import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import Link from "next/link";


export default function Home() {

  const restaurants = [
    {name: "Woodshill"},
    {name: "Fiorellas"},
    {name: "Kataam"}
  ]
  return (
    <div>
    <h1>Hello Paz!</h1>
    {restaurants.map( item => {
        return <div>
          <Link as={"/restaurants/"+ item.name} href="restaurants/[restaurant]">
            <a>{item.name}
            </a>
          </Link>
        </div>
    })}
    </div>
  )
}
