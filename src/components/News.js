import React, { Component } from "react";

import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [
    {
      source: {
        id: "financial-times",
        name: "Financial Times",
      },
      author: null,
      title: "South Africa battles to boost take-up of Covid vaccines",
      description:
        "Supplies are growing but the poor struggle to reach clinics or get time off work",
      url: "https://www.ft.com/content/b6a964fc-69c7-4247-9d06-0c7d3de11420",
      urlToImage:
        "https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2F204dda4a-58d4-4c2e-b938-5a3f3b686654.jpg?source=next-opengraph&fit=scale-down&width=900",
      publishedAt: "2021-09-12T11:37:23.7976478Z",
      content:
        "Initially fearful about side-effects, South African street vendor Palesa Sekwere is slowly coming around to the idea of getting a vaccine against coronavirus. \r\n“I’m being convinced . . . the time wi… [+5368 chars]",
    },
    {
      source: {
        id: "ars-technica",
        name: "Ars Technica",
      },
      author: "Maryn McKenna, wired.com",
      title: "As COVID cases rise, so do hospital-related infections",
      description:
        "Overcrowding from COVID care is allowing infections to rise again.",
      url: "https://www.wired.com/story/as-covid-cases-rise-so-do-hospital-related-infections/",
      urlToImage:
        "https://cdn.arstechnica.net/wp-content/uploads/2021/09/hospital-infection-760x380.jpg",
      publishedAt: "2021-09-12T11:05:00+00:00",
      content:
        "6 with 6 posters participating\r\nLast month, a 46-year-old military veteran in Houston died of pancreatitis, an urgent but treatable condition, while waiting to be admitted to a hospital overwhelmed w… [+11361 chars]",
    },
    {
      source: {
        id: "reuters",
        name: "Reuters",
      },
      author: null,
      title: "No vaccine passports: UK PM to set out winter COVID-19 plan",
      description:
        "British Prime Minister Boris Johnson will this week set out his plans to manage the COVID-19 pandemic in the winter months, announcing a decision to scrap the introduction of vaccine passports and steps to end some emergency powers.",
      url: "https://www.reuters.com/world/uk/no-vaccine-passports-uk-pm-set-out-winter-covid-19-plan-2021-09-12/",
      urlToImage:
        "https://www.reuters.com/resizer/63-hi7a1YowY5tVzTZXADPuR2is=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/IPXPQF676ZOXFPKNTYMP76V4OU.jpg",
      publishedAt: "2021-09-12T10:23:11Z",
      content:
        "LONDON, Sept 12 (Reuters) - British Prime Minister Boris Johnson will this week set out his plans to manage the COVID-19 pandemic in the winter months, announcing a decision to scrap the introduction… [+2364 chars]",
    },
    {
      source: {
        id: "google-news-au",
        name: "Google News (Australia)",
      },
      author: "9News Staff",
      title:
        "Exemptions granted for interstate nurses stranded in NSW after helping to fight COVID-19 outbreak",
      description:
        "<p>South Australian nurses who went interstate to help New South Wales fight its COVID-19 outbreak have been granted exemptions to return home.</p>",
      url: "https://www.9news.com.au/national/coronavirus-nsw-interstate-nurses-unable-to-get-home-after-coming-to-nsw-to-help/c2acc511-3560-46d9-bc29-feebd6c2829e",
      urlToImage:
        "https://imageresizer.static9.net.au/Akp7QM5dGYQ4xXkxaofhIeqCOyc=/1200x628/smart/https%3A%2F%2Fprod.static9.net.au%2Ffs%2Fce639eb1-8da7-4af9-bc42-997238d5bf3a",
      publishedAt: "2021-09-12T10:09:24+00:00",
      content:
        "<p>South Australian nurses who went interstate to help New South Wales fight its COVID-19 outbreak have been granted exemptions to return home.</p>",
    },
    {
      source: {
        id: "nfl-news",
        name: "NFL News",
      },
      author: null,
      title: "Chiefs safety Tyrann Mathieu activated off reserve/COVID-19 list",
      description:
        "Tyrann Mathieu, who previously tested positive for COVID-19 and was placed on the reserve/COVID-19 list, was activated on Saturday, but his status for the Chiefs’ Week 1 game against the Cleveland Browns remains uncertain as NFL Network's Mike Garafolo re",
      url: "https://www.nfl.com/news/chiefs-s-tyrann-mathieu-activated-off-reserve-covid-19-list",
      urlToImage:
        "https://static.www.nfl.com/image/private/t_editorial_landscape_12_desktop/league/u9fxkbkrhoj0ewqbtvpu",
      publishedAt: "2021-09-12T10:07:26.2291789Z",
      content:
        "Embarking on their quest for a third consecutive AFC title, the Kansas City Chiefs will start the season with veteran leader and Pro Bowler Tyrann Mathieu as a game-time decision.\r\nMathieu, who previ… [+1495 chars]",
    },
    {
      source: {
        id: "google-news-ru",
        name: "Google News (Russia)",
      },
      author: "Евгения Куликова",
      title: "Петербург обошел Москву по числу новых случаев коронавируса",
      description:
        "Санкт-Петербург обошел Москву по числу новых случаев коронавируса за минувшие сутки. Об этом свидетельствуют данные, опубликованные оперативным штабом по борьбе с инфекцией. Всего в Санкт-Петербурге на сегодняшний день зафиксировано 592 129 случаев COVID-19. …",
      url: "https://lenta.ru/news/2021/09/12/spb/",
      urlToImage:
        "https://icdn.lenta.ru/images/2021/09/12/12/20210912124645223/share_e81a47cc43fe464e7fe5b88a6df926c9.jpeg",
      publishedAt: "2021-09-12T09:56:00+00:00",
      content:
        "- , . , , 12 , Telegram- .\r\n 1597, 1592.\r\n - 592 129 COVID-19. 292 , 42 .\r\n , 24 18 554 85 . 788 .",
    },
    {
      source: {
        id: "il-sole-24-ore",
        name: "Il Sole 24 Ore",
      },
      author: "",
      title:
        "Pil, lavoro, deficit: ecco quando si raggiungeranno i livelli pre Covid",
      description:
        "Torna in campo il tema della crescita e del recupero di quote di produttività stagnante da decenni",
      url: "https://24plus.ilsole24ore.com/art/pil-lavoro-deficit-ecco-quando-si-raggiungeranno-livelli-pre-covid-AEctzoh?s=hpf",
      urlToImage:
        "https://i2.res.24o.it/images2010/Editrice/ILSOLE24ORE/ILSOLE24ORE/2021/09/10/Politica%20e%20societa/ImmaginiWeb/Clipboard.png",
      publishedAt: "2021-09-12T09:37:26.835196Z",
      content: null,
    },
    {
      source: {
        id: "news24",
        name: "News24",
      },
      author: "Getrude Makhafola",
      title:
        "Covid-19: Pfizer jab approved for use on children aged 12 and older | News24",
      description:
        "Children aged 12 and older can now receive the Pfizer Covid-19 vaccine, says the South African Health Products Authority.",
      url: "https://www.news24.com/news24/SouthAfrica/News/covid-19-pfizer-jab-approved-for-use-on-children-aged-12-and-older-20210912",
      urlToImage:
        "https://cdn.24.co.za/files/Cms/General/d/11457/45c734b7737b4fe587929e2db9cfa708.jpg",
      publishedAt: "2021-09-12T09:33:56+00:00",
      content:
        "<ul><li>The Pfizer Covid-19 vaccine has been approved for use on children as young as 12 in South Africa.</li><li>The SA Health Products Authority said it approved the use of the vaccine on children … [+1858 chars]",
    },
    {
      source: {
        id: "the-wall-street-journal",
        name: "The Wall Street Journal",
      },
      author: "Betsy McKay",
      title: "Covid-19 Could Become Like the Flu if More People Get Vaccinated",
      description:
        "Virus eventually might behave like a routine illness but getting there will be difficult, as the spread of the Delta variant shows",
      url: "https://www.wsj.com/articles/covid-19-could-become-like-the-flu-if-more-people-get-vaccinated-11631439002?mod=hp_lead_pos2",
      urlToImage: "https://images.wsj.net/im-399583/social",
      publishedAt: "2021-09-12T09:30:00Z",
      content:
        "Covid-19 may become a routine illness like a common cold or the flu one day, virologists and epidemiologists say. But it will take a lot to get there, and the ferocious spread of the Delta variant th… [+319 chars]",
    },
    {
      source: {
        id: "bild",
        name: "Bild",
      },
      author: null,
      title:
        "Corona aktuell, News im Ticker: Nachrichten, Zahlen, Fakten zu Covid-19",
      description:
        "Können wir aufatmen? Nicht nur die Zahl der Corona-Neuansteckungen ist gesunken, es sind auch weniger Menschen an einer Covid-19-Infektion verstorben als noch letzte Woche. Die Gesundheitsämter melde",
      url: "http://www.bild.de/news/inland/news-inland/corona-news-im-live-ticker-alle-nachrichten-zu-covid-19-77205864.bild.html",
      urlToImage:
        "https://bilder.bild.de/fotos/corona-aktuell-news-im-ticker-nachrichten-zahlen-fakten-zu-covid-19-90cb7d09989b44948533d1c2a5cb3bf3-77501906/Bild/222.bild.jpg",
      publishedAt: "2021-09-12T09:20:53Z",
      content:
        "10.09.2021 09.38 UhrIntensivmediziner am Hamburger Universitätsklinikum Eppendorf (UKE) sind wegen der hohen Anzahl der ungeimpften Corona-Intensivpatienten auf der Station frustriert. Uns zermürbt, … [+920 chars]",
    },
    {
      source: {
        id: "australian-financial-review",
        name: "Australian Financial Review",
      },
      author: "William McInnes",
      title:
        "Delta and tapering by central banks threaten fragile equity markets",
      description:
        "A commitment by central banks to press ahead with withdrawing support at a time when the delta COVID-19 variant is threatening economic growth has left equity markets in a fragile position.",
      url: "http://www.afr.com/markets/equity-markets/delta-tapering-threaten-fragile-equity-markets-20210910-p58qmx",
      urlToImage:
        "https://static.ffx.io/images/$zoom_0.1936%2C$multiply_4%2C$ratio_1.777778%2C$width_1059%2C$x_0%2C$y_81/t_crop_custom/c_scale%2Cw_800%2Cq_88%2Cf_jpg/t_afr_no_label_no_age_social_wm/3db67ea2cb1a68e2b490fa04550ef3416727c479",
      publishedAt: "2021-09-12T08:40:21Z",
      content:
        "ASX futures were down 28 points, or 0.4 per cent, ahead of the open on Monday, suggesting the local sharemarket could come close to challenging a six-week low.\r\nPerpetuals Matt Sherwood. Dominic Lorr… [+4841 chars]",
    },
    {
      source: {
        id: "independent",
        name: "Independent",
      },
      author: "Zoe Tidman",
      title:
        "Anti-vaxxers mock up leaflets imitating NHS documents and cartoon posters targeting children",
      description:
        "‘Children are not at risk from Covid,’ leaflet falsely claims",
      url: "http://www.independent.co.uk/news/uk/home-news/antivaxxers-covid-vaccine-telegram-leaflets-b1917305.html",
      urlToImage:
        "https://static.independent.co.uk/2021/09/09/18/newFile-1.jpg?width=1200&auto=webp&quality=75",
      publishedAt: "2021-09-12T08:34:31Z",
      content:
        "Anti-vaxxers are creating leaflets to look like official NHS documents and cartoon posters targeting children to share misinformation about Covid vaccines.\r\nPosters are being shared on Telegram chann… [+4120 chars]",
    },
    {
      source: {
        id: "nbc-news",
        name: "NBC News",
      },
      author: "Jeremy Lott",
      title: "Post-Covid, kids need to roam free — and be free to make a mess",
      description:
        "Post-Covid, helicopter parents need to let kids be free to make a mess and explore the world.",
      url: "https://www.nbcnews.com/think/opinion/post-covid-kids-need-roam-free-be-free-make-mess-ncna1277745",
      urlToImage:
        "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2020_10/3254196/200303-messy-kids-parenting-main-kh-3254196.jpg",
      publishedAt: "2021-09-12T08:30:11Z",
      content:
        "In 2015, Pope Francis told a crowd of young people in Paraguay to go out into the world and make a mess. There is some dispute about whether he was speaking spiritually or literally. I think the fair… [+5084 chars]",
    },
    {
      source: {
        id: "news24",
        name: "News24",
      },
      author: "Alex Longley",
      title:
        "The world's shippers are earning the most money since 2008 | Fin24",
      description:
        "A booming demand for goods and supply chain disruptions caused by Covid-19 has given the shipping industry one of its best years.",
      url: "https://www.news24.com/fin24/Economy/the-worlds-shippers-are-earning-the-most-money-since-2008-20210912",
      urlToImage:
        "https://cdn.24.co.za/files/Cms/General/d/336/809e5774bca943dfbb5abdb958ade90d.jpg",
      publishedAt: "2021-09-12T08:18:21+00:00",
      content:
        "<ul><li>A booming demand for goods and supply chain disruptions\r\ncaused by Covid-19 has given the shipping industry one of its best years.</li><li>Earnings are soaring for ships of almost every type.… [+5562 chars]",
    },
    {
      source: {
        id: "cbc-news",
        name: "CBC News",
      },
      author: "CBC News",
      title:
        "Here's why you can't vote online in the 2021 federal election | CBC News",
      description:
        "Despite all the day-to-day activities that moved online during the COVID-19 pandemic, one that hasn’t gone digital is voting in federal elections. Here's why.",
      url: "http://www.cbc.ca/news/politics/online-voting-federal-elections-1.6168106",
      urlToImage:
        "https://i.cbc.ca/1.6168164.1631118546!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/112049235-estonia-internet-voting.jpg",
      publishedAt: "2021-09-12T08:07:24.7794181Z",
      content:
        "This story idea came from audience members like you who got in touch with us. Send us your federal election questions and story tips. We are listening: ask@cbc.ca.\r\nDespite all the day-to-day activit… [+8293 chars]",
    },
    {
      source: {
        id: "australian-financial-review",
        name: "Australian Financial Review",
      },
      author: "The AFR View",
      title: "NSW COVID: Gladys Berejiklian must remain accountable",
      description:
        "Premier Gladys Berejiklian should publicly submit herself to public questioning at least several times a week as NSW enters a testing time, with the COVID-19 health toll about to peak.",
      url: "http://www.afr.com/policy/economy/berejiklian-will-need-to-remain-accountable-20210909-p58q3z",
      urlToImage:
        "https://static.ffx.io/images/$zoom_0.2043%2C$multiply_3%2C$ratio_1.777778%2C$width_1059%2C$x_0%2C$y_0/t_crop_custom/c_scale%2Cw_800%2Cq_88%2Cf_jpg/t_afr_opinion_no_age_social_wm/3102718fa489965f4f2b999d879271956a0941b8",
      publishedAt: "2021-09-12T08:06:13Z",
      content:
        "NSW Premier Gladys Berejiklian should not have to front up to the states daily COVID-19 briefing seven days of every week.\r\nLike most news organisations, The Australian Financial Review generally pus… [+1368 chars]",
    },
    {
      source: {
        id: "google-news-au",
        name: "Google News (Australia)",
      },
      author: "Doug Dingwall",
      title: "ACT reopening plan to factor in NSW COVID hospitalisations",
      description:
        "Chief Minister Andrew Barr said the territory government had to consider transfers of seriously ill patients from smaller southern NSW hospitals into Canberra Hospital.",
      url: "https://www.canberratimes.com.au/story/7426759/act-reopening-plan-to-factor-in-nsw-covid-hospitalisations/",
      urlToImage:
        "https://www.canberratimes.com.au/images/transform/v1/crop/frm/36i7SKuzkApKRqnK2hWiW9n/f107a26d-3e23-4817-8575-f31a0c05eb48.jpg/r579_110_5319_2788_w1200_h678_fmax.jpg",
      publishedAt: "2021-09-12T08:00:00+00:00",
      content:
        "Chief Minister Andrew Barr said the territory government had to consider transfers of seriously ill patients from smaller southern NSW hospitals into Canberra Hospital.",
    },
    {
      source: {
        id: "news24",
        name: "News24",
      },
      author: "Marvin Charles",
      title:
        "Provinces on a mission to get people vaccinated to thwart fourth wave | News24",
      description:
        "Gauteng and KwaZulu-Natal are taking the Covid-19 vaccine to places of worship to ramp up their vaccination numbers and avert a fourth wave of infections.",
      url: "https://www.news24.com/news24/SouthAfrica/News/provinces-on-a-mission-to-get-people-vaccinated-to-thwart-fourth-wave-20210912",
      urlToImage:
        "https://cdn.24.co.za/files/Cms/General/d/10234/7799c3da016b4372b9f302caea43e16f.jpeg",
      publishedAt: "2021-09-12T07:47:34+00:00",
      content:
        "<ul><li>Gauteng and KwaZulu-Natal are planning to ramp up its efforts to get people vaccinated. </li><li>The National Institute for Communicable Diseases has reported 5 309 new Covid-19 cases in Sout… [+3403 chars]",
    },
    {
      source: {
        id: "australian-financial-review",
        name: "Australian Financial Review",
      },
      author: "Jennifer Hewett",
      title: "Onwards and upwards on COVID",
      description:
        "Scott Morrison says Australia has made up the ground on vaccine supply and it will be time to move on once Australians have had the opportunity to be vaccinated by the end of October.",
      url: "http://www.afr.com/policy/health-and-education/onwards-and-upwards-on-covid-20210912-p58qz6",
      urlToImage:
        "https://static.ffx.io/images/$zoom_1.0347%2C$multiply_1%2C$ratio_1.777778%2C$width_1059%2C$x_0%2C$y_0/t_crop_custom/c_scale%2Cw_800%2Cq_88%2Cf_jpg/t_afr_opinion_no_age_social_wm/e729d388bfd384e8ee2339d40ba853be1a5d4ed1",
      publishedAt: "2021-09-12T07:00:41Z",
      content:
        "Morrison tags the extra Moderna doses now headed to pharmacies a family sized dose of hope - available to everyone from aged from 12 to 59 given the prevalence of delta among younger people. In Victo… [+4119 chars]",
    },
    {
      source: {
        id: "il-sole-24-ore",
        name: "Il Sole 24 Ore",
      },
      author: "Redazione",
      title:
        "Covid, ultime notizie. Bianchi: «Così limiteremo la dad nelle scuole»",
      description: "Le notizie in breve del 12 settembre",
      url: "https://www.ilsole24ore.com/art/covid-ultime-notizie-bianchi-cosi-limiteremo-dad-scuole-AEhvgHi",
      urlToImage:
        "https://i2.res.24o.it/images2010/2021/09/AEhvgHi/images/7e4c756a-0e2c-11ec-a765-dbdfde98ea33-fotohome0.jpg",
      publishedAt: "2021-09-12T06:46:27Z",
      content:
        "«Il Green pass è fondamentale per supportare la ripartenza in sicurezza delle imprese e del Paese. La linea del governo è netta per estenderne quanto più possibile lutilizzo e completare il piano vac… [+1149 chars]",
    },
  ];

  constructor() {
    super();
    console.log("Constructor: NewsItem Component");

    this.state = {
      articles: this.articles,
      isLoading: false,
    };
  }

  render() {
    return (
      <div className="container my-3">
        <h2>NewsMonkey Top Headlines</h2>

        <div className="row">
          {this.state.articles.map(article => {
            return (
              <div className="col-md-3" key={article.url}>
                <NewsItem
                  title={article.title.slice(0, 45)}
                  description={article.description.slice(0, 88)}
                  imageUrl={article.urlToImage}
                  newsUrl={article.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;
