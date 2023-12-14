console.log('loaded')
const leaderboardHeader = [...document.querySelectorAll('h1')].find(el => el.innerText === 'Leaderboards')

if (leaderboardHeader) {
    console.log('element found')
    const leaderboard = leaderboardHeader.parentElement()
    leaderboard.setAttribute('style', 'display: none;')
}