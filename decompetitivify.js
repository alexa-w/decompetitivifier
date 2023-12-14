const leaderboardHeader = [...document.querySelectorAll('h1')].find(el => el.innerText === 'Leaderboards')

if (leaderboardHeader) {
    const leaderboard = leaderboardHeader.parentElement()
    leaderboard.setAttribute('style', 'display: none;')
}