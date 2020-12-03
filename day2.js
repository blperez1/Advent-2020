const passwords = [
    "6-8 s: svsssszslpsp",
    "3-4 n: gncn",
    "4-8 v: vkvmvdmvhttvvrgvvwv",
    "16-18 j: jjjjjjjjjjjjjjjjjf",
    "13-15 p: pppppppvppppxxppp",
    "3-4 k: bkksggqbtwkkkzqcz",
    "8-18 x: qxphxxtczxxxxxrbxxl",
    "6-11 c: dccxcccccchrcfdckcsc",
    "10-11 c: ccvxccccccccc",
    "2-4 f: pszff",
    "18-20 z: zzzzzzzzzzwzzzzzzzzj",
    "1-7 g: ggggggpggggggg",
    "3-5 h: hhhhfhh",
    "2-5 x: dxxzxv",
    "7-8 s: ssssssss",
    "3-9 k: ktkkkkkklkck",
    "2-9 r: rzrrrrrrrrrrrr",
    "5-9 k: tkrkhkxbvkbkkkkk",
    "8-9 n: tnnpbnrns",
    "14-15 q: qqqqqqqqqqqqqqqq",
    "11-12 q: cqqqqqqqqqsqqqlqqqqq",
    "15-17 v: vvvvvvvvvvnvvvvvlvvv",
    "2-10 c: ccccccccvgckcccccc",
    "8-9 h: hbhhhhchhhs",
    "7-13 t: thtfttzctpvtn",
    "14-15 w: wwwwwwwvwwwwwppwww",
    "5-19 m: mmmmmjmmmmmmmmcmmmw",
    "2-8 z: mvtnjvzzs",
    "8-10 c: cccccccxcccc",
    "8-11 m: mmmmmmmmmmxmmmmk",
    "6-7 h: hhhhhhhhhhkhh",
    "6-8 h: xmhsphhm",
    "2-3 b: bbgb",
    "2-14 q: qqqqtkqzqqqqqq",
    "9-15 z: zzzzzzzzzzzzzzb",
    "2-12 n: hnmztvzxxwvnrnvlfbs",
    "8-13 c: cccccccccccctccbcc",
    "10-13 k: jkjzqkkkkmkkk",
    "3-10 m: mmmlmmmmmmmm",
    "1-2 r: nprr",
    "9-15 z: zzfjwgczzzzzzvlqz",
    "5-6 q: vqqqqq",
    "3-10 r: rrftrrkrrg",
    "7-9 r: tqfrrcrvbzrkrr",
    "5-12 j: jjjjjjjjjjjjj",
    "14-18 p: phnppvpchpncdppjpf",
    "3-5 t: hdtrtt",
    "7-9 x: xxxxxxxxlx",
    "3-4 m: wmmm",
    "1-14 l: hllllllllllllll",
    "2-3 g: jgmg",
    "17-18 c: ccccccccccccccccctc",
    "8-13 l: lllllllllllldl",
    "4-9 v: sbxvbkvfqvvxvnl",
    "3-5 g: nggxbp",
    "3-4 t: jtthcmtfnct",
    "5-6 c: vccwpcct",
    "4-8 v: vvvvvvvbvv",
    "1-3 t: qttt",
    "6-7 j: mwjxqmljtfxbcrjvjjj",
    "2-3 d: xddxnxmfhvdk",
    "17-18 j: pcjjcwkjjvvdjjvrjb",
    "3-6 h: drplhl",
    "10-15 g: ggggqggggngprggg",
    "11-13 n: nnznnnnnnnrnn",
    "11-17 p: pppppxppprpppprpppp",
    "14-15 d: qdfqdxkqdrqcddr",
    "3-5 k: tkkknr",
    "10-11 m: ncmrmxzsszfj",
    "19-20 w: wwwwwwwwwwwwwwwwtwnm",
    "4-6 r: rrrrrdrrtkf",
    "8-10 z: zzzzzzzzzzz",
    "4-20 b: hmslxbrbrptfcljhblqb",
    "6-9 p: pgtpptpnn",
    "5-6 l: lllldl",
    "1-4 c: cccw",
    "6-11 n: tnnnnnnpnnvb",
    "6-8 m: rwxcrbmmvdmqmd",
    "7-8 l: llllllll",
    "10-11 s: ssssvssnsslsss",
    "1-3 f: ffkh",
    "4-5 j: jlzhjj",
    "1-3 x: xxxxxxxx",
    "3-5 r: jvrrrr",
    "18-20 n: nnnnnnhdnxnnnnngnnvv",
    "12-13 n: nnnnnnnnnmnkn",
    "8-11 h: qhhhhhslhqhhhwfm",
    "5-18 j: hgzmdpkfpnjcmpwtqj",
    "9-10 c: cccccccckc",
    "3-4 g: gggs",
    "9-16 s: ssllsssvkshssjsth",
    "10-12 v: sbnpkfdmnvqpvkvv",
    "6-7 t: sfssstp",
    "1-5 c: hqccccfcccrcmcchc",
    "6-8 d: qrdwflbdd",
    "1-2 h: ghwh",
    "9-10 v: vvvvvvvvcn",
    "12-14 l: hlzxblbkkrhtllfnn",
    "1-4 b: sbbbbbbbb",
    "6-7 l: lhlllql",
    "13-14 z: jgzcqqgmvdzzzq",
    "5-14 h: tnrhhmqknqhmhfht",
    "2-4 h: chhxjfksc",
    "6-10 s: ljmsgsssstscsps",
    "7-8 k: mgpzkkkg",
    "6-7 s: sjskmscfssss",
    "11-12 f: fffffffffffdff",
    "1-8 x: xxqjxmgtxz",
    "12-13 l: llllllllllllfl",
    "9-12 c: ccbpccdcgccc",
    "5-7 f: hjfrbgk",
    "15-18 x: kwmttbfvqcxxjbmhvx",
    "3-8 q: rqqfqblmc",
    "3-4 l: nlsqf",
    "7-9 x: jgdmhzxxs",
    "2-8 g: ggqtqgkgfggfmg",
    "2-8 k: wpkzwwkm",
    "1-9 n: nnnnnnztpnnnn",
    "3-16 m: lxmqlcpwdfqhrmztsd",
    "14-16 l: lllllllllllllbllln",
    "7-8 b: bbbbbbbxbbbbb",
    "9-10 f: ffffffjbmf",
    "9-10 w: jrwwwwzmkwwfw",
    "4-5 c: ccctc",
    "1-6 l: cllllg",
    "2-6 k: kwkkqk",
    "6-13 d: zdjddkxmdqrddtbdgbd",
    "6-8 k: kkkkkkkqk",
    "3-4 g: twgsprvgm",
    "9-10 b: ckbmbshbhbbbbb",
    "9-15 q: qqqqqqkqqqqqqqlqh",
    "6-12 n: nnnnnnnnnnnn",
    "2-6 j: cjnxjzljjlq",
    "14-16 v: vvvvvvvvvvvvvvvm",
    "6-13 f: gxffsfgdfpfffffffs",
    "12-13 l: qdltpbdlzjvllftq",
    "13-14 j: jjjjjjjjjgjjjj",
    "7-10 x: sxxxlxwxxxjsxxzqxxt",
    "2-10 q: qjqqqkqqkqq",
    "1-2 r: rcdwrr",
    "1-6 j: jjjjjjj",
    "9-12 n: nndnncnnnnqn",
    "12-16 p: tbwnppzjpnpptpncp",
    "8-9 q: qzqhqqqgqqqqqtqqq",
    "14-15 c: ccccccccccccmhd",
    "7-8 b: jpbfjsbb",
    "2-7 j: jjjjjjqj",
    "3-5 j: lrzgxjhlx",
    "5-9 r: rrrrrmrrm",
    "8-11 k: kkwkkkkbkzk",
    "2-4 b: nbqpbtzkdrdm",
    "2-13 b: bpxltqdxbxbjbl",
    "2-5 h: jhhhz",
    "5-8 c: cncccvcn",
    "9-11 h: pfhhjhhhhsh",
    "1-9 v: jvvvvvvvsv",
    "7-11 b: bxzxpbbmxfgrkxb",
    "2-7 d: ddddddddd",
    "6-11 r: rzczrrtljhzkrkrrbrrr",
    "7-17 h: jshjhqcrphlsgxlqh",
    "1-2 n: npkn",
    "14-18 n: nnnkzntnnnnnnnxnnknn",
    "6-8 g: ggmfgggb",
    "7-19 l: llllllwlllllllllllll",
    "2-5 t: qdftt",
    "8-10 g: gggggggpgg",
    "3-7 h: gbtdhwhhkl",
    "2-7 q: glqqrqqzpvqz",
    "5-11 p: pcllpxgpldnk",
    "8-16 v: fvvvvnvvvrqwvvzf",
    "2-3 k: kbkk",
    "3-5 x: xxqxvtz",
    "2-3 m: jnmmdzzx",
    "1-6 p: zvppppppppppd",
    "2-10 z: zslzzzzdzzzzmz",
    "2-5 s: skssrsssssssssssss",
    "2-6 b: zbbzbb",
    "1-3 w: twrw",
    "2-10 k: hkkhtkskvk",
    "5-8 q: qqqqqqqf",
    "6-8 l: qrspqlkdcscclllkltkl",
    "2-10 j: jjjjjjjjjcj",
    "4-11 t: ckttqtlhclhv",
    "13-15 p: ghsdsmrjwppmmxp",
    "7-8 j: btrhmpjk",
    "6-10 g: ckkxpmqmxgg",
    "1-3 t: tnmrhtlztgttxxztxv",
    "2-4 n: kknnnnnnk",
    "3-6 q: qcqqqwnfqrj",
    "1-14 v: wvvvvvvvvvvvvvvv",
    "10-11 j: btvbnjckfmjfpjjzc",
    "15-18 d: ddddddddddddddfddddd",
    "8-12 q: qqqqqqqqqqqqqk",
    "4-6 d: qdzxddddnd",
    "8-11 s: sssssndmssdsssss",
    "2-4 d: qdhjddnd",
    "5-8 f: ffffzffdf",
    "12-15 f: lzfjpkhswmdrphf",
    "3-6 x: xbxxtx",
    "8-12 m: mmmmmmmqmmmmmm",
    "8-9 v: zvzqgvjvtvv",
    "2-11 w: bwskvwsqbcbnl",
    "7-14 p: lpgpxqppppplpvlwxx",
    "10-11 l: lllllllllnll",
    "15-16 q: qqqqqqqqqqqqqqqcqq",
    "8-14 v: vgqvvjxwvvzvvv",
    "3-13 v: vcvzclwbtvbgcngwghh",
    "3-5 w: zwwnrwww",
    "3-4 k: hkkkkk",
    "3-13 h: whhhgqzwjkjqfjc",
    "4-5 m: mmmmmmm",
    "5-7 k: pkkkkxxkkk",
    "1-4 f: pqkff",
    "1-5 x: xxxxvx",
    "1-3 t: mtht",
    "4-6 j: jvjrcfl",
    "1-5 t: jtmtttc",
    "7-8 k: kkkpkkkkkrkkqk",
    "4-5 t: jtttt",
    "14-19 z: zzzzmztzczzrzdzzzzn",
    "14-16 s: nqvfdwmtvbsbtnks",
    "12-14 g: gggggggggggzggg",
    "6-9 m: llcrncdzmqlzh",
    "7-14 r: rnrbbwrglbljrw",
    "4-11 c: ctccccctcch",
    "18-20 j: jjjjjjjjtjjjjjjjjjjj",
    "5-6 c: ncccrc",
    "2-4 b: wbbk",
    "1-2 t: tstf",
    "15-17 h: hhhhhzhhhhhhhhxhhh",
    "11-14 k: kkkkkkkkkkgkkkk",
    "9-13 n: vcqnnnlcnnnnq",
    "2-5 s: slssn",
    "6-8 m: bmmmmmqwmmmm",
    "8-9 c: cnccccccrc",
    "3-4 s: zcss",
    "13-15 c: cccjgccchjcmccrdcccc",
    "4-6 r: fkvpfjnflkrrccz",
    "2-6 s: shssssssss",
    "12-14 r: rrrrrrrrrrrrrv",
    "5-19 h: hhhhmhhhhhhhhghhhhhh",
    "4-9 b: gjntfbwtb",
    "12-15 n: nzndcrnjnnnnnngnd",
    "11-12 z: vqzjftszbzzz",
    "16-18 w: wlxwzwwczqwmtrpwbwg",
    "3-11 g: qmgghrggggt",
    "2-3 v: vntvvvvvvv",
    "7-11 b: bbbbbbbbbblb",
    "2-3 t: nctttjgr",
    "1-8 t: nrlrtnptztstnfstx",
    "1-4 r: rrrz",
    "12-13 z: zzznzzzvzzzzhczz",
    "12-13 n: gnjqqnnnnnnnnnnnsnnc",
    "11-12 g: ggggggghgrjg",
    "2-7 q: ljsvqlq",
    "3-9 h: wlkfhjvthpfhzln",
    "8-10 j: jkxzjjjbjjjjjf",
    "2-5 p: pqppp",
    "2-7 c: cmhgqwswwwjvwx",
    "3-4 w: wwww",
    "6-7 z: nfxmzdzk",
    "7-12 q: rqqbqxqdwchf",
    "3-4 l: llzrl",
    "4-5 h: hftdhw",
    "8-15 x: pxcdzxldgxgmpxxmxsv",
    "8-10 h: hjhkhdkgghhhhhwh",
    "10-14 n: npnnnnnnndnnnn",
    "3-7 m: dhmtmhnx",
    "3-4 p: fphp",
    "1-2 t: tttmvv",
    "13-17 j: qrjvzjbvjvvjjsjhg",
    "14-19 v: bvvvwdvbngqnzfnvvvv",
    "4-7 c: ccczccccq",
    "3-13 h: hxsghhnhhhhhhhh",
    "2-7 n: nnfnnnnnnh",
    "13-14 w: wwwwwwwwwwwwwjw",
    "6-11 d: mdcddbdrddd",
    "15-19 r: rrgrrrrprrrrrrdrrrrr",
    "11-16 x: xxxkxxxxxxmsxxxxxxx",
    "4-13 v: xvqkhfpvlsvvvvs",
    "2-3 x: jxjbxbq",
    "11-14 s: fdjtpsgsrgdlksskm",
    "7-8 x: rdsxpbzwxnkxvd",
    "10-11 f: ffffgffvfft",
    "10-11 p: pwjzmsnqbps",
    "13-14 b: bbbbtbbbbbbbdj",
    "1-4 x: xxxgg",
    "11-16 c: ccwlggccckwccccccc",
    "10-12 g: ggggggbggkgqgg",
    "3-4 q: kzfqqc",
    "2-10 r: rsrrrrxbgrrrrhrrrrdr",
    "1-2 s: mssksf",
    "2-5 q: bqnwqpmtglphq",
    "4-11 h: hhhmhhhhhhhh",
    "5-7 w: wwwwnwxww",
    "3-4 n: nmxc",
    "7-8 c: wcrcmccq",
    "2-10 x: qxctcjtmvbj",
    "8-14 w: gwrtwflwfsgwzwmmw",
    "2-4 z: wzjzlc",
    "2-11 m: zmctnwcvwhmgcq",
    "5-19 v: gcmvfvvkvxdmvvxvwgvv",
    "11-13 c: cccccpcccwcphcc",
    "5-6 j: pjjtcbprsjjhnz",
    "6-8 h: hktwdmsc",
    "2-4 x: kxxlx",
    "3-4 l: tblq",
    "5-7 r: lpqbmmrhtmwrcvlt",
    "3-4 z: zbhzmz",
    "9-11 n: nnnnnnqnnnn",
    "3-4 g: cdgd",
    "4-7 j: jnqjssh",
    "6-9 p: prlsjpmmn",
    "10-11 f: fffffffpkzqqffrf",
    "3-7 k: kktkkkkk",
    "1-4 q: qqqrqqqqqqq",
    "10-13 l: llllllsllnpllllll",
    "2-6 d: hdxhvdz",
    "3-4 s: kssjq",
    "8-10 t: rtdttdcttp",
    "1-2 x: xxjxxxxbx",
    "11-13 x: xxvxxxxxxxxxj",
    "6-10 n: xnnnkfwgnn",
    "3-4 c: cwfcc",
    "16-18 j: jjjjjjjjjjjjjjjjjpjj",
    "4-7 n: lnqnlndbnf",
    "11-14 k: nkkkkkkkkkkdkkkkk",
    "2-6 j: jjjjjcj",
    "13-14 v: vvvvvvvvvvvvvvvv",
    "10-12 v: vvvvvvvvvwvv",
    "3-13 z: nzhzvmzcbzzzzzj",
    "2-6 d: dddhthddddddq",
    "6-7 s: ssssscs",
    "5-8 f: ffxffffdff",
    "10-14 r: rvdzskgrmrrsxgc",
    "8-9 s: sssssssss",
    "3-5 g: khgkl",
    "5-6 n: nnnbnnn",
    "1-9 w: wwqpwhwcdw",
    "7-8 g: gxgggrgcggg",
    "5-8 w: wswwnwwwwxwwwwwwwww",
    "4-11 b: svbwbqsbbbbbnpcbpprb",
    "6-7 j: zjvjmsjjjjnvt",
    "5-6 l: lhlllpll",
    "1-2 b: bxbbxfbxb",
    "9-12 g: gjgqggggzggffgp",
    "3-4 v: wjfvsvd",
    "2-6 v: fvvpvcxnpgd",
    "9-10 q: qqvqqqqrrq",
    "15-18 k: kjkkklkkxkkqnsgqwkt",
    "1-4 z: zsjf",
    "2-6 l: dvcsllhw",
    "10-12 x: xxxxxxxxxxxxx",
    "5-6 g: dtggpgggcwvvdw",
    "5-13 p: ppppkppppdpvdpzdlppp",
    "3-7 d: ddwddddlddd",
    "7-12 r: jrxbrprrgngzpjjc",
    "4-7 m: mmxzmfmmlmm",
    "3-5 m: pgtmz",
    "6-13 z: dzpdlrsnxzshkbtlxvmn",
    "6-12 x: trszxlcdxknxnnj",
    "6-11 k: xgkbsqkgnkk",
    "7-10 r: rrrrrrxrrsrr",
    "6-7 t: ctwmxntbdl",
    "5-6 d: dbcddc",
    "8-18 m: wtmtmtvmcmmjsmmxmmmm",
    "3-5 k: dnvxk",
    "6-7 b: bbbbbbl",
    "1-5 c: cqzfcjhnccjwwjftkx",
    "6-9 d: hwsbcdmrldpszh",
    "3-7 f: gffffff",
    "13-17 b: bbbtbbbzbbbbsbbbjbbk",
    "1-3 w: wwwhw",
    "5-6 b: xqbgbxblbbb",
    "5-9 p: phhpqppppgtppp",
    "3-8 z: zzzzcrjbzzwzzzckzz",
    "1-3 b: lbrbnbbbb",
    "3-5 q: gqqgf",
    "10-11 c: jcccccjzccmcc",
    "4-6 l: dlpggl",
    "5-7 n: nnnnpnnn",
    "4-6 f: sffnfslkffdfff",
    "4-5 s: dsssj",
    "2-5 v: vvvnnhvv",
    "1-3 f: bfff",
    "8-14 g: gcndkmgfnpmsmtm",
    "1-12 d: dddddddtddcdd",
    "12-14 t: ttttttttttxttttttttt",
    "2-6 w: mwwmvmpwzwpzkn",
    "9-12 c: ccccmcccmccbcccc",
    "1-7 c: ccgncfc",
    "3-6 w: wrrwwww",
    "6-7 s: szpvlbhsbtktl",
    "3-4 f: wfmfw",
    "12-17 n: nnnnbnnxncnnvnpnjnr",
    "5-6 h: hhhhth",
    "1-3 q: qnbqf",
    "3-4 s: fmsj",
    "7-9 l: nlwlflsllllk",
    "9-16 s: xxpzsmvhbsssdkps",
    "6-9 p: pstppplpr",
    "4-6 r: rrrrrr",
    "1-10 j: hjjjljjjjwjjj",
    "13-20 c: qclflvdlmzwmtgfctwhc",
    "6-7 b: bbbcbdb",
    "8-13 r: wrrzbcwvfqkfr",
    "13-14 r: rrrrrrrrrrrrrg",
    "2-15 j: jhhjnvgxzbjskjjj",
    "2-4 p: ppghp",
    "4-5 s: gjmsrksvqqssslss",
    "15-17 h: hhhhhshhhhhhhhhhh",
    "3-5 c: lcclm",
    "5-6 j: gjnjgv",
    "9-10 z: lzzzzzzrtdzqzz",
    "2-3 s: qksnrsvvb",
    "5-11 d: ddfvzdddkrgrddr",
    "15-18 v: vtcvvlqsqvpkvvmvhv",
    "3-6 j: kbgjshj",
    "1-4 r: rrcrrrhltr",
    "3-4 q: qvfq",
    "4-8 w: mzwwswwttnxmkp",
    "2-3 b: zblbsbncbk",
    "7-13 k: tdksbkckckkjk",
    "8-9 h: hmpzhxhkhmlhzhkqph",
    "3-9 p: ctrjcknnrzpxklt",
    "1-3 d: ddgd",
    "8-10 t: xttttdttqs",
    "4-5 k: bkkmk",
    "6-7 k: kxtxkkcpbfb",
    "11-13 r: znbhrsrrrdrrc",
    "14-16 x: xxxxxdxxxxxqxlxx",
    "6-15 x: hxlxxxxxxqpjtxwxxxxx",
    "8-16 l: qlqwrlllphlllllxglll",
    "14-16 m: mssmmfmwlqznhndh",
    "1-9 h: hhchhhhhfhhsmhhhh",
    "6-9 b: bbbbbbbbt",
    "5-6 r: mrfrjr",
    "7-8 x: nxxxlxlxbxx",
    "6-19 t: tkhdtvtblvnlqbjsvct",
    "4-14 p: vpnpntggdzctqpbrl",
    "9-11 n: nnnbnnnnnhnn",
    "1-2 p: whppppwpppppzpqppp",
    "2-3 m: bbqxwvjxmnxh",
    "2-4 c: nczcwqwkctzwl",
    "3-4 x: xxxvxx",
    "10-13 w: bzqgckszwwjtl",
    "6-9 g: qhggzggjfjgghwrkfbg",
    "15-16 n: nmnnnnncnnnnnnnkndn",
    "3-11 r: frrrrrprrrgrrr",
    "6-7 p: pppdppg",
    "3-8 s: lzdthfbsfskk",
    "4-9 h: bmrhdrzbhtmx",
    "10-11 m: mmgtmmmmmgmmm",
    "7-8 k: kkkkkfxkkkkkkkkbk",
    "3-5 n: nnnnnn",
    "2-4 f: sxxfbpshndbkkmwf",
    "12-13 p: prpppppppppfppp",
    "2-3 f: wtff",
    "2-4 m: pdmmm",
    "2-3 d: dddd",
    "10-11 m: mmmmmmmmmqnmm",
    "1-3 w: wpcwwnwkr",
    "1-5 q: wqqqqqsqqqqqc",
    "1-4 h: mrhhh",
    "4-6 w: wxlwvwbhzwwkps",
    "7-8 z: pnzgfkzhqfw",
    "1-3 z: zzqz",
    "3-9 r: rrmrrrrrrrrrr",
    "2-5 f: ffffqffjn",
    "2-6 p: rpqtkc",
    "1-3 s: gsss",
    "3-5 t: tkttttwtkjxlq",
    "5-7 w: wkmwnpbw",
    "3-10 v: vvnvxvcjvvzcvcvvtv",
    "1-3 v: vvwvt",
    "2-15 t: ttttttttttktttnttt",
    "15-17 w: qrcfnqkflswwwlxwzwdl",
    "6-8 d: sddvdjdmdmd",
    "1-3 p: kppppppcp",
    "8-17 v: mtrbwzbvzjvtmmzxw",
    "3-5 s: mnsss",
    "1-9 b: jbbbbbbbbbvlhbbb",
    "8-13 f: fffffffffffdvfff",
    "11-12 f: fffffffffffm",
    "1-4 z: zznq",
    "10-12 t: tttttttttttmtttrtt",
    "8-10 g: gggggggxggvgpg",
    "8-9 d: ddddddgdwrpdd",
    "9-10 b: dfsbqbrbjbptrlxrbzf",
    "2-8 c: hcczwkwcspccrcckc",
    "7-12 s: rhmtjmsjhdsqpr",
    "9-14 q: wqqqgqqqvgvhvqlqv",
    "4-6 s: jbgnsss",
    "2-9 k: jkjbktwdrdnn",
    "4-11 n: nnnnnnnnnngnnnn",
    "11-12 j: bswbpbkdjzkj",
    "3-4 j: crjjqc",
    "7-8 g: gggtzglg",
    "3-4 r: gzdr",
    "4-5 h: hpkhsrhshcht",
    "6-9 h: mhhhhhhht",
    "4-9 l: dxbqtftsl",
    "3-4 k: qfkkkkn",
    "8-10 p: jwhmxpppfhjhzdj",
    "6-7 g: bgcgggh",
    "7-15 x: zxxxvxxxmksxxxnxxrr",
    "4-5 v: vvdpvnv",
    "5-9 l: llrqhllcl",
    "4-5 q: vqqqk",
    "11-13 d: drddwqlddcdsddzzxb",
    "1-2 g: gmdjg",
    "10-11 b: bbbbbbbbbbmbbb",
    "9-16 d: ddddddddtddddcddddd",
    "6-10 j: jxjjrjmvwwjjsjjcth",
    "3-4 f: fqnfdqt",
    "2-7 p: mppmnpp",
    "3-5 z: lzzzzzjz",
    "1-10 m: msbjbgmmkw",
    "18-19 t: lzttqtttkttttstjbtr",
    "1-2 b: bkbzb",
    "2-11 v: vgwrcfcszcvlwt",
    "3-4 z: jzzx",
    "3-8 t: ttttttkttfkt",
    "11-18 b: vjhvwjbwcwbffmpbbr",
    "6-19 d: kgwqcwbphdwwrddzkzd",
    "6-7 p: pppbbcpm",
    "2-7 p: ppdwknp",
    "4-8 t: rjdtmftjgftwt",
    "3-7 l: clljldl",
    "6-7 c: qpcsczccccccmrh",
    "6-8 f: fffffcsf",
    "10-14 v: lvvlklxxvvsnvk",
    "10-11 f: ffffffffffgf",
    "10-12 v: vswclpclcqtvvrrzf",
    "6-8 g: gjgggpggghsgggggg",
    "2-13 k: kkkwckkckkkkvkkkk",
    "9-16 r: jtrrrbqrnrpjrrshxc",
    "7-8 f: pvmjhfhg",
    "7-8 d: xdddddnddd",
    "2-4 r: srxrrphrb",
    "2-3 v: vvkgd",
    "2-5 z: bzzzzhh",
    "11-16 h: hnchhhhhhhghhhhh",
    "10-12 p: pzppqppppppb",
    "13-14 p: pppppppppppppkpppppp",
    "12-15 z: zzzzzzpzzzzzzzfzzdz",
    "9-10 z: zzzzzzzzpz",
    "4-9 j: wfjjntmjxpdq",
    "9-11 t: tklpbmlntjs",
    "3-15 m: qmxmwjmmjgmsmwmz",
    "2-3 g: hgggp",
    "1-8 d: ldddddldfddd",
    "7-10 t: ttcttttztw",
    "6-8 n: nwcjdgbnmnndltr",
    "11-12 t: ttttqqtttnhttvttt",
    "6-11 r: rnrhrrrrrrcgtr",
    "10-12 l: rlllrxwljlwtzl",
    "18-19 m: mmmmwmmmmmmmmmmmmnmm",
    "7-8 v: fsvvvdvkvnvgwvvv",
    "16-17 m: mmmmmdmmmmmmmmcsmmm",
    "7-8 p: pppppwpfb",
    "5-8 j: vtjcsjjcjlj",
    "6-11 t: ttttttttgmqttt",
    "4-13 t: vkmtvvqxclcpmtrpl",
    "1-9 s: dsssssssds",
    "5-6 d: dddddpdt",
    "1-9 p: pppppppptppp",
    "15-16 f: pqfjqfdpfxcvwbnf",
    "5-6 d: tcgdwd",
    "3-11 f: tpfqgzkfrvqrjfhrrf",
    "1-3 t: ttltt",
    "11-12 q: pqlqjqcwjqqv",
    "1-8 f: vqtdxgsfkjmncxdkqdfb",
    "4-5 n: nnnnnn",
    "9-10 g: jgggfgqglgghxgg",
    "7-12 x: xdxxkcxcxxxm",
    "5-13 f: fdglsggrwpmxfnm",
    "1-11 x: wxxxxxxxxxgx",
    "13-15 d: dddbdkwdldzdddd",
    "5-10 g: cpgggccpvkzggzgbgtgg",
    "1-4 w: wwzvq",
    "3-13 h: zzhnhnjhhkplhhwph",
    "4-6 f: fffkfff",
    "6-7 v: vvvvvvdv",
    "3-4 v: ktvttmvsc",
    "11-13 c: cccccccccctccccccc",
    "15-18 j: jjjjjjjjjrjjjjxjjvj",
    "5-13 v: vvvqzvvvvvvvvvvv",
    "5-17 q: szncqqqlmcspmcbgqhq",
    "2-7 s: tsrnhjslffbsv",
    "13-17 b: vvbhmbmlzsqbwbpkb",
    "16-19 f: nftvgftdfdrffjtfgvf",
    "15-20 n: nnmnnsnnlnnncnnnnncn",
    "18-19 f: fffffffffffffffffkf",
    "3-5 b: bhnbbm",
    "1-6 j: jbjjwjjjjjj",
    "3-8 h: hhhhhhhlhh",
    "13-16 k: hkxtvdkgpkpkkcfdtkr",
    "12-13 q: qqqqqqqqqqqjq",
    "2-3 g: ggkgggg",
    "11-13 c: xcdxpcnzcsckl",
    "2-11 l: xlbsbrrnlllpl",
    "3-4 l: llml",
    "2-7 c: wscrkcvncc",
    "9-12 k: dlwkkrhfhkkkkbvfrw",
    "8-14 w: xggjtvwbxccdqww",
    "2-4 w: lcswnmwsprkhg",
    "12-13 b: btfpmbbbsxzbb",
    "10-12 p: ppjppppvpppqpp",
    "7-8 r: rrwvcglg",
    "7-19 p: pmrhpppppppsppppjspp",
    "2-4 l: xllxb",
    "6-15 k: ktknghkkstkkjkkx",
    "3-4 p: pppq",
    "5-6 g: svmgpgcvbjh",
    "4-5 n: svnnnrnpn",
    "5-7 b: vsbgpjl",
    "4-7 m: mmsmmmnhmmmm",
    "5-7 t: lvdxtpx",
    "5-10 k: sxkkgrkkqt",
    "7-10 k: sskkqxzhkkpzkkvhkkb",
    "7-13 s: zskccbtsbssdctlmvsss",
    "7-8 r: lrsrrrscr",
    "7-13 p: ppfppvpppmppdppvfpg",
    "7-8 d: ddddhhjd",
    "2-5 r: thbkr",
    "2-4 k: kkkkk",
    "5-11 x: xxxxzxxxxxx",
    "7-8 v: zbcfxnlv",
    "3-5 w: nmwvjw",
    "1-10 h: fqhqhhhhhhhhhhzh",
    "15-17 j: jjjjjjpjjjjjjjljj",
    "11-12 f: ffffffqmffmfff",
    "5-7 p: ppppmpp",
    "6-11 n: nnnvkjrqwnwn",
    "1-4 n: nnnccb",
    "3-5 t: tnkttwbttchst",
    "4-5 v: nvdpvtrvt",
    "12-14 d: dddddddddbddddrd",
    "2-8 l: clvlhdxtqqzdsd",
    "9-12 z: bzzkzzrzzzzhz",
    "3-4 p: jpqlkgl",
    "4-5 j: jjjjp",
    "2-8 f: vfnnlxfrll",
    "8-11 p: ppqppppwpplpp",
    "9-11 k: kkkkkkkkkkk",
    "3-4 l: lkjl",
    "1-2 q: qnccf",
    "3-5 x: wxkxzxcjk",
    "13-14 g: rzwvvthgrlfjgd",
    "16-18 d: dfdldddddddddddhddd",
    "12-16 s: sssdssqdrsssssss",
    "1-7 k: kdkkwkkvk",
    "4-6 l: mvrlllzn",
    "5-7 l: lwdhgzl",
    "4-11 h: dvhhjdhhjkhbcbhb",
    "15-17 p: sppppppppvppppppn",
    "1-3 c: cccc",
    "4-5 r: pdrbrfbnvbrgwxtwstlj",
    "16-18 p: pnpphvpppwppknpxpp",
    "1-8 p: zppppppbp",
    "1-2 k: xckk",
    "1-4 d: dddgd",
    "16-17 p: ppppppppppppppppf",
    "3-4 v: vqmv",
    "4-5 n: ncknqlwnrnjn",
    "8-9 t: tttttttpt",
    "3-6 m: bfpvxmtzmw",
    "1-7 g: qgggjggggggg",
    "2-4 j: nwwjrmckjjg",
    "6-8 d: hdcjwgddpwhkt",
    "6-13 r: rrkrrrrrrrrrjrr",
    "13-14 n: nnznsnnnnhnnnnnnn",
    "3-7 h: kbhhhhhbqhhhqhhh",
    "6-9 k: kkkkkkhkkkkk",
    "3-5 d: wthbpm",
    "6-7 s: ssscsstsss",
    "5-12 s: ssbsjsssssssssssss",
    "4-5 k: wzsnxlk",
    "10-11 q: qqqqqqqqqjqqq",
    "6-7 r: trrrrrdr",
    "2-4 l: hjhljhl",
    "2-4 v: vhbv",
    "16-17 j: rjnjjxtbjjjjjjvjn",
    "4-8 w: nwswjktwznhwtzbdrp",
    "6-10 f: ffpfbsvcfm",
    "10-12 b: kbbbbbbblxbb",
    "4-5 x: qxxcxx",
    "6-8 d: bhdcpdmrwg",
    "5-11 d: xdmdvkdddddxddd",
    "3-4 d: ddddp",
    "1-4 q: xqvq",
    "1-5 x: xxxxzxx",
    "10-11 x: xxxxxxxxxxzx",
    "7-8 n: nqdnnnhrnn",
    "9-10 q: zqqnqtxgpq",
    "2-7 g: ggwgrfwgzg",
    "4-5 p: prppp",
    "2-4 d: glnmd",
    "1-3 f: fflf",
    "3-9 w: zwbwdzqzw",
    "4-5 t: tvttt",
    "10-17 c: cflcrfcccsfzcftvcgc",
    "5-8 x: xxxxxxxt",
    "3-5 j: hjljjj",
    "18-19 z: zzzzzzzzzzzzzzzzzzd",
    "17-19 l: llbhjllrlllllllgrllf",
    "14-16 f: vffmmfffwfrqgfdmd",
    "3-4 c: ccckcgccd",
    "6-8 m: lxwmxmkrk",
    "9-11 j: jmjjsjxjnjdj",
    "9-10 r: xhpccrrrsr",
    "5-12 q: qqqqxqwqqpfrqqqq",
    "3-5 m: mxmtc",
    "4-11 b: gbzxxbjrrctlrrv",
    "8-12 m: mmmmmmmlmmmm",
    "7-10 s: sssssssspfr",
    "2-3 n: xnhn",
    "1-3 p: btppz",
    "12-16 l: lllxllllllljlllll",
    "2-5 d: zddtm",
    "5-14 p: pppppppppppppsp",
    "9-11 k: kgkkmdzfkjkzpnz",
    "11-16 c: kbccczcccccnhccq",
    "1-2 p: pvph",
    "2-3 l: llfxvq",
    "12-16 l: lhhdzwczgrsxgkqd",
    "6-9 c: ccccccccqctccccccc",
    "8-9 r: rrrrrrrsr",
    "2-7 c: slccmjcccc",
    "2-14 n: whwqmdlrxmxzzdz",
    "10-11 v: vwvvkvvvvvvvvv",
    "5-6 j: dfjkjbcsjqjjhkjmg",
    "6-8 f: fffffffff",
    "8-15 s: tsszssjsssssmsss",
    "1-5 k: kkrblv",
    "6-7 j: jjjjjjv",
    "2-7 q: dvrnqtq",
    "6-7 v: vnvqwkvvcxpjmvvmg",
    "13-15 h: hhhhhhhhhhhhkhth",
    "10-11 s: skvssssssds",
    "3-5 b: zbmjbhbbcbbbg",
    "6-7 x: kxxstwfwbcxdxvjj",
    "3-9 l: lljlllllrll",
    "12-13 p: pppqppppppnpp",
    "4-5 s: pfmpn",
    "7-8 v: vkjvvvvb",
    "8-11 t: tttxtlfhtftttwbttt",
    "4-5 h: hvshsjhvb",
    "14-16 b: bbbbbbbbbbbbbbbw",
    "6-9 l: lxzklmgll",
    "2-7 n: nnnnnnnn",
    "1-8 x: nxxxxxxxxxxx",
    "16-17 q: qqqqqqqsqqqqqqqwf",
    "4-17 c: cgndccccscchqhxcbcc",
    "4-7 b: bbbbbmn",
    "12-14 p: pppppppppppppdp",
    "3-4 t: nttttrvrtd",
    "5-17 p: pxhbppfpjzzkpgdvb",
    "7-12 c: ccccccccsccvccjcc",
    "1-11 t: tjsjxctpbngtdvbdmlm",
    "3-5 n: wgmwnjwnnnkcnlqqr",
    "19-20 p: hwfknlcbnhmvkcrpjwvp",
    "4-7 f: gvlhxkffvd",
    "4-7 d: ddddrmhfdddfxf",
    "1-2 q: qxnq",
    "3-7 k: kqkqskcslcqbxkdsr",
    "3-6 w: wngwxz",
    "18-19 k: kkkkkkkkkkkkkkkkkkqk",
    "6-7 v: vvvvvvtvxq",
    "1-4 w: wwkrmwwf",
    "2-3 c: ccdcw",
    "5-6 w: wwwwsw",
    "10-11 f: fcfwgfrdzbwfffx",
    "7-10 d: dddddmdphbtdpdddd",
    "2-4 t: dmtt",
    "18-19 s: xsdssssnnnssxqcvssg",
    "8-9 q: qqqqqqqqqq",
    "18-19 c: ccxccccmccfccsbcbcc",
    "1-3 k: kqdwsfkdxl",
    "5-7 t: vtdtntttlrtt",
    "2-10 w: wvnfvctwmwwwqr",
    "1-11 c: lccccccccccc",
    "6-14 t: qbtkgmscnbztcth",
    "2-6 n: mnjrfnpmwnlhwvksmmss",
    "8-13 m: mzzmmpmmmmwmz",
    "4-7 t: nqvtjnttfsmc",
    "8-13 p: pppppppppppts",
    "10-12 b: bbbbbblbbvbbbb",
    "2-3 b: bbzdv",
    "5-6 x: tmxxwx",
    "7-11 q: kqbqqqqqtqfx",
    "1-11 n: tnlnxpcqnnn",
    "4-6 j: jdjxcjbggjcdjpknx",
    "6-11 w: stxldwdvstwf",
    "3-10 g: qggqjgfxqgmjdgv",
    "10-15 n: nwnrnnrwnnnnnnc",
    "6-15 l: lflldhzbllzlbklx",
    "1-2 s: hsgsj",
    "5-6 f: ffffdff",
    "1-5 m: bmhmm",
    "2-6 m: bmlbslbgjm",
    "14-16 r: rrrbrrjfrrqrfcrrr",
    "3-4 x: pxtx",
    "7-9 b: bbbbbbwbb",
    "15-17 q: qfqqzqqqqqqqqqqqnqq",
    "1-4 j: tjjjjj",
    "1-10 v: vvvvvvvvxvvvvk",
    "3-4 h: hhzhh",
    "1-6 h: hhhhhxh",
    "1-9 s: smwssfhsvs",
    "13-14 s: tswmwsgtnlpwsn",
    "4-5 v: vnkvvzs",
    "11-14 x: xxxxxxxxxxcxxxx",
    "14-16 n: nnnnnnnknnnnhpnnb",
    "7-9 k: kkkkkkrkkkkk",
    "3-5 q: qqqgxscqm",
    "17-18 n: njhmndnnpnvnnnnnnn",
    "4-5 h: chshwj",
    "11-13 z: zzzzzzzkzzlhfz",
    "7-14 q: qqqqqqlqqqqqqqq",
    "17-19 v: dvvvxtdgpxvbvvvzvvmv",
    "7-9 f: rmffffffc",
    "4-8 r: rwrqrlzrxrrqsccq",
    "2-3 v: vtvv",
    "4-5 x: qxgrnxxzbv",
    "14-16 w: wwwwwwwwwwwwwwwc",
    "2-6 c: tcvmrcht",
    "6-9 z: zzzzzzzzz",
    "9-14 n: nnnswrnnnqmvcnnb",
    "3-4 f: frxfdff",
    "8-9 n: nnnhnnzsn",
    "2-13 w: wmwwwvwlwwwwttqjjwc",
    "5-6 l: lllllj",
    "8-11 w: pwrbjlwwwhvxhnsvwh",
    "3-7 n: kndzxnsnn",
    "13-14 x: xxxtxxxbzxxxxnx",
    "13-15 c: ccccccccccccccz",
    "12-15 n: nnnnnnnnnnnsnnsnn",
    "4-10 w: wwwrwwwwwwww",
    "12-16 r: wrrrrrrrrrrgrrrrr",
    "8-11 l: nlllxllzllll",
    "3-5 d: prdfhhvdrpd",
    "2-3 t: wttzbp",
    "3-5 h: jhxhhdztw",
    "2-7 r: qrwcxjhtrrlw",
    "11-13 d: ddddddddddfpdd",
    "10-11 q: xqztlqqqqqk",
    "1-11 z: jzzzzznzzzq",
    "9-10 b: zbbbbbbbtb",
    "9-10 k: xktkkkpgnpkskkkzjkm",
    "14-15 j: jjwjjvjjjjjjjjvjj",
    "2-6 l: lntrlllx",
    "12-13 g: lgggggblghggmg",
    "11-12 x: xxxxxxxxxxvxxx",
    "3-5 l: llllm",
    "7-12 x: ffqrxjxxhbbp",
    "16-17 j: jjjjjjjjjjsgjjjjb",
    "1-5 g: hcfjntzgcxk",
    "3-6 v: vvqvvqvvv",
    "1-12 p: pwjdppqpcgpplgwz",
    "5-6 d: ddbdpd",
    "8-10 t: twhttnrnpt",
    "15-17 v: vvvvvvvvvvvkvvvvxvv",
    "13-15 f: dffjnhmxhbwlfkv",
    "4-12 c: ccccccccdzccccc",
    "3-12 p: rvpgssncpbqlkjc",
    "1-2 h: hhhl",
    "1-2 j: jkjrxqj",
    "4-13 b: bbvbbbbbbbbbbbbbbb",
    "6-11 q: ntqqhqvgqhkhz",
    "10-13 c: cdcckjgcwdcsct",
    "9-10 f: fffhffvqff",
    "5-7 m: mmsmklm",
    "7-8 z: zzzzzpzxlzzg",
    "2-12 f: nddlfsjrlhqv",
    "5-7 m: bvmxmwmlxpmmwt",
    "1-11 n: fbsghrrzbtnmn",
    "13-14 h: hhjtlhhhhhhhfhphbhh",
    "5-7 p: ppppdpspp",
    "6-7 v: vdvvvvhv",
    "6-9 k: kkkmknkkkkbc",
    "2-9 k: jvpczkkcnvfvm",
    "5-6 g: vgkggb",
    "4-9 m: mttsgntmmq",
    "4-9 x: vxxxxxxxz",
    "2-5 h: gqhhhh",
    "1-9 m: nkcwjmqmmgldxwm",
    "3-5 v: vvvvvv",
    "5-12 z: zzzzzzzzzzzwzzzz",
    "4-5 l: llglt",
    "2-8 w: wqwbwkzwsc",
    "4-6 c: ccctccc",
    "8-9 g: gggggggpgggg",
    "6-9 x: xxxxxpxxc",
    "5-6 k: fcbffhkbtr",
    "4-5 f: bffvfffff",
    "2-5 w: wjtgw",
    "13-16 z: zmzzzztzjpzzzqzw",
    "10-12 q: qrqqxqqkjqqcqq",
    "2-9 n: nnnnnnnnnnnwnnnnnn",
    "3-5 l: hlsgqtvv",
    "4-6 c: gcccnscccllfq",
    "16-17 l: llllllllllllllldlll",
    "6-9 h: lhhhhbhhj",
    "15-17 r: rznrrrhltxfrrkpjwrrr",
    "7-8 t: tttttstt",
    "7-16 j: kmjjcfjjcjjjjbwjjpjr",
    "10-13 s: sqjvssssstrhd",
    "8-11 q: qqqqqqqsqqtqq",
    "8-11 m: xzhlmnmnmkw",
    "17-18 r: rrrrrrrrrrrrrrrrpk",
    "1-3 l: xljlml",
    "8-11 m: jwtdhpmkqmqphms",
    "9-11 h: zhhrhhhsthhhhhr",
    "5-14 n: rkndnhgbnnwnnzgn",
    "8-9 f: lfnfvdgfw",
    "2-8 q: sdqqqqqqqqq",
    "1-3 c: jtcm",
    "1-2 v: vvxv",
    "2-7 b: bbbbgbz",
    "5-6 v: vvvvvvv",
    "3-4 n: hnnmgqt",
    "10-11 r: rrrrrrrrbrbqr",
    "3-4 x: xxxcxk",
    "2-3 j: jnjjjj",
    "10-12 f: fffffffffffcf",
    "13-16 d: dplpbdkxzjdlddddm",
    "2-10 h: hjhhhhhhhjhhhh",
    "8-17 q: xzszqwgpmscpcfqwkp",
    "8-11 q: qqqqqqqvqqqq",
    "3-4 j: lsjj",
    "8-9 z: nszzjzzczzzptgkbd",
    "7-16 n: nnnnnnnnnnnsnnnlnnnn",
    "2-16 p: xswnqpctbvmllwjpw",
    "1-3 r: rrgrrlr",
    "3-5 w: wwlwh",
    "3-9 f: bffktxcwpfhckffr",
    "5-6 g: ghrjzg",
    "5-9 k: xhnltmktkt",
    "1-6 x: xxxxxxxxx",
    "1-4 l: bllslllbnl",
    "8-16 v: lvvvvvpvzvvvvvgwjvvv",
    "8-11 j: jjcjjfzjjrj",
    "2-7 c: wqcrhxcg",
    "10-13 p: ppdppppppngbpdppz",
    "1-3 v: gbflwpsdgnrzhkdv",
    "3-6 w: pwhbwwwtww",
    "1-6 f: qmfwff",
    "11-16 x: xxnxxbxxxxgxxxsxrx",
    "3-11 b: cztbfcbpcbb",
    "3-8 l: bmljlgkjcw",
    "11-14 c: hccccccccccscp",
    "4-7 l: qlpxbll",
    "5-6 b: kscpwb",
    "2-4 s: sgtsmlhcm",
    "5-6 n: nnnnnt",
    "8-12 c: rcksqgcqcpfc",
    "3-4 w: wclw",
    "6-10 s: wlskbsmjkjngqqs",
    "16-17 g: dfgggggwbgggggggt",
    "1-2 k: kdjb",
    "2-6 p: lmpppp",
    "3-5 f: ffcfh",
    "3-4 w: wwjl",
    "4-7 v: vvtxvwvsqb",
    "4-6 s: stslsxs",
    "11-15 x: xrxcxxxxxxvxxxxcx",
    "4-7 r: xrrlrrrrr",
    "5-10 v: vvbvsvtmtvvvvv",
    "4-8 b: cbjbbmsx",
    "1-6 t: tttttgtt",
    "3-7 m: mmkmmmmm",
    "13-16 p: ppppmdspppgpwbpppplm",
    "2-6 h: tlfdnhz",
    "6-7 f: fsnfdftgsfdt",
    "9-10 c: jcccjwgcccsccxnc",
    "6-14 h: hhphhhrhhhhhhklhhh",
    "6-8 r: xrrrrrrrrg",
    "8-10 g: kgjgzgxgnwg",
    "5-13 p: fdkrpjzttpgpp",
    "8-12 x: xxxxxxxtxxxx",
    "3-9 v: nvprvvvtxvvvv",
    "5-12 g: gggggggggggjg",
    "2-4 x: sxxsxxdxxbqsgxhqqc",
    "9-10 j: jxjgjjmgjcjzjjjjj",
    "13-14 d: ddddddddzdddfvld",
    "6-8 l: lllmllllll",
    "3-4 k: wqqkzwqgkqkk",
    "1-3 p: dppp",
    "5-9 p: ppkpppppjpt",
    "8-10 r: rmqjnrrrrldrn",
    "14-15 j: jjjjhjjjjjjjjjqj",
    "9-15 q: mqsfqcqlqqfpgkbb",
    "11-14 d: ddddhwxdddfrdddd",
    "5-7 h: hhhhhhfh",
    "6-7 q: qqlkdqjq",
    "10-11 r: rrrrrrrrrvrrf",
    "2-3 k: ftkkdc",
    "2-9 g: jpxcgggzgsgngrhght"
]

//part 1

const policyArr = (arr) => arr.reduce((acc, str) => {
    //const [, one, two, letter, password] = str.match(/^(\d+)-(\d+) (\w): (\w+)$/)
    const [policy, password] = str.split(":");
    const [frequency, letter] = policy.split(" ")
    const [min, max] = frequency.split("-");
    // const min = parseInt(one, 10)
    // const max = parseInt(two, 10)
    return acc.concat({
        password,
        letter,
        min,
        max
    })
}, [])

const countLetter = ({password, letter}) => {
    return [...password].filter((element) => element === letter).length
}

const checkPolicy = arr => {
    let count = 0;
    for(let password of arr) {
        if(countLetter(password) >= password.min &&
            countLetter(password) <= password.max) count++
    }
    return count;
}

// console.log(checkPolicy(policyArr(passwords)))
// console.table(policyArr(passwords))



//part 2
const isCorrectIndex = (arr) => arr.filter(({password, letter, min, max}) => {
        return (password[min] === letter && password[max] !== letter) ||  (password[min] !== letter && password[max] === letter)
}).length

console.log(isCorrectIndex(policyArr(passwords)))

console.table(policyArr(passwords))