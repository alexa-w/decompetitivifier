// inefficient, but should work
document.onchange(() => {
    // classnames are dynamically generated, no ids are present
    // so, we need to query by inner text

    const headers = [...document.querySelectorAll('h1')]

    // leaderboard
    const leaderboardHeader = headers.find(el => el.innerText === 'Leaderboards')
    
    if (leaderboardHeader) {
        // actual container
        const leaderboard = leaderboardHeader.parentElement()
        // if leaderboard already hidden, do nothing, avoids infinite loop
        if (!leaderboard.getAttribute('style').match(/display: none/).length) {
            leaderboard.setAttribute('style', 'display: none;')
        }
    }

    // social news
    const socialNewsHeader = headers.find(el => el.innerText === 'Social News')

    if (socialNewsHeader) {
        // actual container, nested two levels deep
        const socialNews = socialNewsHeader.parentElement.parentElement
        // if already hidden, do nothing, avoids infinite loop
        if (!socialNews.getAttribute('style').match(/display: none/).length) {
            socialNews.setAttribute('style', 'display: none;')
        }
    }
})