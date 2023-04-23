import React from 'react'
import Aisle from '../Aisle/Aisle/Aisle'
import Countdown from '../Countdown/Countdown'
import Topnav from '../Topnav/Topnav'
import styles from './styles.module.scss'
import RegistryCard from './RegistryCard/RegistryCard'

export default function Registry() {
  return (
    <div className={styles['homepage']}>
      <div className={styles['topnav']}>
        <Topnav />
      </div>
      <div className={styles['content']}>
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-semibold mb-8">Our Wedding Registries</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <RegistryCard
              title="Zola Registry"
              description="Find a curated selection of our favorite home items, experiences, and more on our Zola registry."
              imageUrl="https://source.unsplash.com/z3QZ6gjGRt4"
              registryUrl="https://www.zola.com/registry/tateandzaylie"
            />
            <RegistryCard
              title="REI Registry"
              description="Adventure With Us! Find a handpicked selection of our favorite outdoor gear on our REI registry."
              imageUrl="https://source.unsplash.com/g30P1zcOzXo"
              registryUrl="https://www.myregistry.com/wedding-registry/tate-reynolds-and-zaylie-collins-salt-lake-city-ut/3639173"
            />
          </div>
        </div>
      </div>
    </div>
  )
}