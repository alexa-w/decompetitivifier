const observer = new MutationObserver(function () {
    // classnames are dynamically generated, no ids are present
    // so, we need to query by inner text
    const headers = [...document.querySelectorAll('h1')]

    // leaderboard
    const leaderboardHeaders = headers.filter(el => el.innerText === 'Leaderboards')

    // social news
    const socialNewsHeaders = headers.filter(el => el.innerText === 'Social News')
    
    if (leaderboardHeaders.length) {
        leaderboardHeaders.forEach(leaderboardHeader => {
            const leaderboard = leaderboardHeader.parentElement
            // if leaderboard already hidden, do nothing
            if (!leaderboard.getAttribute('style').match(/display: none/)) {
                leaderboard.setAttribute('style', 'display: none;')
            }
        })
    }

    if (socialNewsHeaders.length) {
        socialNewsHeaders.forEach(socialNewsHeader => {
            const socialNews = socialNewsHeader.parentElement.parentElement
            // if already hidden, do nothing
            if (!socialNews.getAttribute('style').match(/display: none/)) {
                socialNews.setAttribute('style', 'display: none;')
            }
        })
    }
})

observer.observe(document, { childList: true, subtree: true })
