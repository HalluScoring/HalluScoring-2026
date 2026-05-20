import { useMemo } from 'react'
import './Organizers.css'

import hamzahImg from '../assets/HamzahLuqman.jpeg'
import saadImg from '../assets/saadEzzini.jpeg'
import ahmedImg from '../assets/AhmedHasanaath.JPG'
import muhammadImg from '../assets/MuhammadAbdulMageed.jpg'
import bouchImg from '../assets/salah_bouch.jpg'
import aishaImg from '../assets/aisha.jpeg'
import abdessalamImg from '../assets/abdessalam.jpg'
import nadhirImg from '../assets/nadhir.jpg'
import hichamImg from '../assets/hicham.jpeg'
import abdennourImg from '../assets/abdennour.png'

export default function Organizers() {
  const organizers = useMemo(
    () => [
      {
        name: 'Aisha Alansari',
        email: 'aisha.ansari@kfupm.edu.sa',
        affiliation: 'KFUPM, Saudi Arabia',
        initials: 'AA',
        avatar: aishaImg,
      },
      {
        name: 'Dr. Hamzah Luqman',
        email: 'hluqman@kfupm.edu.sa',
        affiliation: 'KFUPM, Saudi Arabia',
        initials: 'HL',
        avatar: hamzahImg,
      },
      {
        name: 'Dr. Saad Ezzini',
        email: 'saad.ezzini@kfupm.edu.sa',
        affiliation: 'KFUPM, Saudi Arabia',
        initials: 'SE',
        avatar: saadImg,
      },
      {
        name: 'Ahmed Abul Hasanaath',
        email: 'ahmed.ghuf@gmail.com',
        affiliation: 'Saudi Aramco, Saudi Arabia',
        initials: 'AH',
        avatar: ahmedImg,
      },
      {
        name: 'Malak Alkhorasani',
        email: '2230009062@iau.edu.sa',
        affiliation: 'IAU, Saudi Arabia',
        initials: 'MA',
      },
      {
        name: 'Dr. Hend Al-Khalifa',
        email: 'hendk@ksu.edu.sa',
        affiliation: 'KSU, Saudi Arabia',
        initials: 'HA',
      },
      {
        name: 'Dr. Muhammad Abdul-Mageed',
        email: 'muhammad.mageed@ubc.ca',
        affiliation: 'UBC, Canada',
        initials: 'MM',
        avatar: muhammadImg,
      },
    ],
    [],
  )

  const andalusOrganizers = useMemo(
    () => [
      {
        name: 'Pr. Abdenour Hadid',
        email: '',
        affiliation: 'Sorbonne University, UAE',
        initials: 'AH',
        avatar: abdennourImg,
      },
      {
        name: 'Dr. Salah Eddine Bekhouche',
        email: '',
        affiliation: 'University of the Basque Country, Spain',
        initials: 'SB',
        avatar: bouchImg,
      },
      {
        name: 'Dr. Abdessalam Bouchekif',
        email: '',
        affiliation: 'Hamad Bin Khalifa University, Qatar',
        initials: 'AB',
        avatar: abdessalamImg,
      },
      {
        name: 'Dr. Mohammed-En-Nadhir Zighem',
        email: 'mohammed.en.nadhir.zighem@qutwo.com',
        affiliation: 'Qutwo, Finland',
        initials: 'MZ',
        avatar: nadhirImg,
      },
      {
        name: 'Dr. Hichem Telli',
        email: '',
        affiliation: 'Huawei, Finland',
        initials: 'HT',
        avatar: hichamImg,
      },
    ],
    [],
  )

  const allOrganizers = useMemo(
    () => [...organizers, ...andalusOrganizers],
    [organizers, andalusOrganizers],
  )

  return (
    <section className="organizers reveal-on-scroll" id="organizers">
      <div className="organizers-container">
        <h2 className="section-heading">Organizers</h2>
        <h3 className="section-description">Meet the team behind HalluScoring</h3>

        <div className="organizers-grid">
          {allOrganizers.map((organizer) => (
            <article className="organizer-card" key={`${organizer.name}-${organizer.affiliation}`}>
              <div className="organizer-avatar-wrap">
                {organizer.avatar ? (
                  <img className="organizer-avatar" src={organizer.avatar} alt={organizer.name} />
                ) : (
                  <div className="organizer-avatar organizer-avatar--fallback" aria-hidden="true">
                    {organizer.initials}
                  </div>
                )}
              </div>

              <div className="organizer-info">
                <h4 className="organizer-name">{organizer.name}</h4>
                <p className="organizer-affiliation">{organizer.affiliation}</p>
                {organizer.email ? (
                  <a className="organizer-email" href={`mailto:${organizer.email}`}>
                    {organizer.email}
                  </a>
                ) : (
                  <span className="organizer-email organizer-email--missing">Email not listed</span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}