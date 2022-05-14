"use strict";(self.webpackChunkscifracx_github_io=self.webpackChunkscifracx_github_io||[]).push([[1477],{10:function(i){i.exports=JSON.parse('{"blogPosts":[{"id":"scifracx-on-SciMLCon","metadata":{"permalink":"/blog/scifracx-on-SciMLCon","editUrl":"https://github.com/SciFracX/scifracx.github.io/blob/master/blog/2022-04-18-scifracx-with-sciml.mdx","source":"@site/blog/2022-04-18-scifracx-with-sciml.mdx","title":"SciFracX in SciMLCon!","description":"Finally got some time to publish this blog post\ud83d\ude0b\u3002","date":"2022-04-18T00:00:00.000Z","formattedDate":"April 18, 2022","tags":[{"label":"SciML","permalink":"/blog/tags/sci-ml"},{"label":"SciFracX","permalink":"/blog/tags/sci-frac-x"},{"label":"community","permalink":"/blog/tags/community"}],"readingTime":0.235,"truncated":true,"authors":[{"name":"Qingyu Qu","title":"SciFracX maintainer","url":"https://github.com/ErikQQY","imageURL":"https://github.com/ErikQQY.png","key":"ErikQQY"}],"frontMatter":{"slug":"scifracx-on-SciMLCon","title":"SciFracX in SciMLCon!","authors":["ErikQQY"],"tags":["SciML","SciFracX","community"]},"nextItem":{"title":"Symbolic Fractional Differentiation and Integration!","permalink":"/blog/symbolics"}},"content":"import Youtube from \'mdx-embed\';\\nimport { MDXEmbedProvider } from \'mdx-embed\';\\nexport default (props) => <MDXEmbedProvider>{props.children}</MDXEmbedProvider>;\\n\\nFinally got some time to publish this blog post\ud83d\ude0b\u3002\\n\\nMarch 23rd, we represent [Fractional Order Computing and Modeling with Julia](https://www.youtube.com/watch?v=ti16lYst-Bc) in [SciMLCon](https://scimlcon.org/2022/)!!!\\n\\n\x3c!--truncate--\x3e\\n\\nThis is absolutely an amazing experience!\ud83d\ude04\\n\\n<YouTube youTubeId=\\"ti16lYst-Bc\\" />"},{"id":"symbolics","metadata":{"permalink":"/blog/symbolics","editUrl":"https://github.com/SciFracX/scifracx.github.io/blob/master/blog/2022-02-28-symbolics.mdx","source":"@site/blog/2022-02-28-symbolics.mdx","title":"Symbolic Fractional Differentiation and Integration!","description":"It is very happy to share that FractionalCalculus.jl is now supporting symbolic fractional differentiation and integration!!!","date":"2022-02-28T00:00:00.000Z","formattedDate":"February 28, 2022","tags":[{"label":"features","permalink":"/blog/tags/features"},{"label":"SciFracX","permalink":"/blog/tags/sci-frac-x"},{"label":"fractional calculus","permalink":"/blog/tags/fractional-calculus"}],"readingTime":0.38,"truncated":true,"authors":[{"name":"Qingyu Qu","title":"SciFracX maintainer","url":"https://github.com/ErikQQY","imageURL":"https://github.com/ErikQQY.png","key":"ErikQQY"}],"frontMatter":{"slug":"symbolics","title":"Symbolic Fractional Differentiation and Integration!","authors":["ErikQQY"],"tags":["features","SciFracX","fractional calculus"]},"prevItem":{"title":"SciFracX in SciMLCon!","permalink":"/blog/scifracx-on-SciMLCon"},"nextItem":{"title":"SciFracX announcement in Discourse","permalink":"/blog/scifracx-on-discourse"}},"content":"It is very happy to share that FractionalCalculus.jl is now [supporting symbolic fractional differentiation and integration](http://scifracx.org/FractionalCalculus.jl/dev/Derivative/symderivative/)!!!\\n\\n\x3c!--truncate--\x3e\\n\\nWith the help of [SymbolicUtils.jl](https://github.com/JuliaSymbolics/SymbolicUtils.jl), it is easy to first declare rules and apply defined rules to the expression\\n\\n```julia\\njulia> using FractionalCalculus, SymbolicUtils\\njulia> @syms x\\n```\\n\\nAll we need to use are ```semidiff``` and ```semiint``` functions to compute fractional differentiation and integration.\\n\\n```julia\\njulia> semidiff(log(x))\\nlog(4x) / sqrt(\u03c0x)\\n```\\n\\n```julia\\njulia> semiint(x^2)\\n0.6018022224509401(x^2.5)\\n```\\n\\nBingo!! Enjoy yourself~"},{"id":"scifracx-on-discourse","metadata":{"permalink":"/blog/scifracx-on-discourse","editUrl":"https://github.com/SciFracX/scifracx.github.io/blob/master/blog/2022-02-02-discourse-ann.mdx","source":"@site/blog/2022-02-02-discourse-ann.mdx","title":"SciFracX announcement in Discourse","description":"Happy Chinese new year!\ud83d\udc2f\ud83d\udc2f\ud83d\udc2f","date":"2022-02-02T00:00:00.000Z","formattedDate":"February 2, 2022","tags":[{"label":"ANN","permalink":"/blog/tags/ann"},{"label":"SciFracX","permalink":"/blog/tags/sci-frac-x"},{"label":"community","permalink":"/blog/tags/community"}],"readingTime":0.14,"truncated":true,"authors":[{"name":"Qingyu Qu","title":"SciFracX maintainer","url":"https://github.com/ErikQQY","imageURL":"https://github.com/ErikQQY.png","key":"ErikQQY"}],"frontMatter":{"slug":"scifracx-on-discourse","title":"SciFracX announcement in Discourse","authors":["ErikQQY"],"tags":["ANN","SciFracX","community"]},"prevItem":{"title":"Symbolic Fractional Differentiation and Integration!","permalink":"/blog/symbolics"},"nextItem":{"title":"SciFracX in JuliaCN Winter Conference","permalink":"/blog/scifracx-on-juliacn"}},"content":"Happy Chinese new year!\ud83d\udc2f\ud83d\udc2f\ud83d\udc2f\\n\\n\x3c!--truncate--\x3e\\n\\nI finally got around to announce our SciFracX community!\\n\\nToday is also an auspicious day in lunar calendar, so here we are\ud83d\ude06:\\n\\nhttps://discourse.julialang.org/t/scifracx-organization-fractional-order-computing-and-modeling/75614"},{"id":"scifracx-on-juliacn","metadata":{"permalink":"/blog/scifracx-on-juliacn","editUrl":"https://github.com/SciFracX/scifracx.github.io/blob/master/blog/2022-01-09-juliacnwinterconf.mdx","source":"@site/blog/2022-01-09-juliacnwinterconf.mdx","title":"SciFracX in JuliaCN Winter Conference","description":"In 2021 winter, SciFracX participated the winter online meetup hosted by JuliaCN. (Before SciFracX official website published\ud83e\udd2a)","date":"2022-01-09T00:00:00.000Z","formattedDate":"January 9, 2022","tags":[{"label":"conference","permalink":"/blog/tags/conference"},{"label":"SciFracX","permalink":"/blog/tags/sci-frac-x"},{"label":"community","permalink":"/blog/tags/community"}],"readingTime":0.23,"truncated":true,"authors":[{"name":"Qingyu Qu","title":"SciFracX maintainer","url":"https://github.com/ErikQQY","imageURL":"https://github.com/ErikQQY.png","key":"ErikQQY"}],"frontMatter":{"slug":"scifracx-on-juliacn","title":"SciFracX in JuliaCN Winter Conference","authors":["ErikQQY"],"tags":["conference","SciFracX","community"]},"prevItem":{"title":"SciFracX announcement in Discourse","permalink":"/blog/scifracx-on-discourse"},"nextItem":{"title":"Hello World!","permalink":"/blog/mdx-blog-post"}},"content":"import Youtube from \'mdx-embed\';\\nimport { MDXEmbedProvider } from \'mdx-embed\';\\nexport default (props) => <MDXEmbedProvider>{props.children}</MDXEmbedProvider>;\\n\\nIn 2021 winter, SciFracX participated the winter online meetup hosted by JuliaCN. (Before SciFracX official website published\ud83e\udd2a)\\n\\n\x3c!--truncate--\x3e\\n\\nThe video:\\n\\n<YouTube youTubeId=\\"oVvrW7EgEwg\\" />\\n\\n\\n<br />\\n\\nThe slides:\\n\\n<iframe src=\\"https://julia-cn-conf2021.vercel.app/1\\" height=\\"400px\\" width=\\"700px\\"></iframe>"},{"id":"mdx-blog-post","metadata":{"permalink":"/blog/mdx-blog-post","editUrl":"https://github.com/SciFracX/scifracx.github.io/blob/master/blog/2022-01-07-first.mdx","source":"@site/blog/2022-01-07-first.mdx","title":"Hello World!","description":"Hello all!","date":"2022-01-07T00:00:00.000Z","formattedDate":"January 7, 2022","tags":[{"label":"annoncement","permalink":"/blog/tags/annoncement"},{"label":"SciFracX","permalink":"/blog/tags/sci-frac-x"},{"label":"community","permalink":"/blog/tags/community"}],"readingTime":0.33,"truncated":true,"authors":[{"name":"Qingyu Qu","title":"SciFracX maintainer","url":"https://github.com/ErikQQY","imageURL":"https://github.com/ErikQQY.png","key":"ErikQQY"}],"frontMatter":{"slug":"mdx-blog-post","title":"Hello World!","authors":["ErikQQY"],"tags":["annoncement","SciFracX","community"]},"prevItem":{"title":"SciFracX in JuliaCN Winter Conference","permalink":"/blog/scifracx-on-juliacn"}},"content":"Hello all!\\n\\nThe official website of SciFracX project is now published using [Docusaurus](https://docusaurus.io/)!\\n\\n\x3c!--truncate--\x3e\\n\\nSciFracX is an orgnization aiming at making fractional order computing and modeling easier than ever with Julia.\\n\\nNow, there are four packages under SciFracX, [FractionalSystems.jl](https://github.com/SciFracX/FractionalSystems.jl), [FractionalDiffEq.jl](https://github.com/SciFracX/FractionalDiffEq.jl), [FractionalCalculus.jl](https://github.com/SciFracX/FractionalCalculus.jl) and [FractionalTransforms.jl](https://github.com/SciFracX/FractionalTransforms.jl).\\n\\nIf you are also interested in fractional order computing and modeling, JuliaLang and numerical methods binding math and programming, welcome to join SciFracX!!!!!"}]}')}}]);