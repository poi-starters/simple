import styles from './style.module.css'

const title = document.createElement('h1')
title.className = styles.title
title.textContent = 'Hello Poi!'

document.getElementById('app').appendChild(title)