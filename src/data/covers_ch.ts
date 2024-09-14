export default [
  { id: 0,
    name: "章节 0: 人工智能 (AI)",
    quote: "如果一台计算机能够欺骗人类，让他相信自己也是人类，那么它就应该被称为智能。", 
    author: "― 艾伦·图灵",
    image: "src/assets/cover_0.webp",
    title: "这是来自 OpenAI 首页的 ChatGPT 介绍", 
    description: "自 ChatGPT-3.5 发布以来，它首次以其高质量的文本回复和通用性，给我们留下了深刻的印象。它不仅可以回答常规问题、帮助我们归纳总结，还可以写故事、写代码、翻译，或一些日常对话。随着版本的升级, 它在理解上下文内容、处理复杂问题等各个方面都有所进步，似乎通用人工智能变得触手可得。"
  },
  { id: 1,
    name: "章节 1: 张量",
    quote: "麦克斯韦方程组..., 当使用时间作为第四维来重新书写时，这组相对复杂的八个方程就会简化为一个单一的张量方程。这就是物理学家所说的 ‘美’。", 
    author: "― 加來 道雄，物理学家",
    image: "src/assets/tesseract.jpg",
    title: "一个四维立方体（或称为超立方体）的模型 | Robert Brook/Science Photo Library Art", 
    description: "这张图像代表了一个四纬超立方体 (tesseract) 。虽然我们无法直接看到第四维，但这张图给出了一个这个超立方体的三维的投影。你可以想象来自高维空间 (四维空间) 的一束光经过这个超立方体垂直照射在我们的三维空间。类似于我们用一个手电筒垂直照射墙面，中间有一个立方体，这时在墙面会形成一个正方形的投影。"
  },
  { id: 2,
    name: "章节 2: 一个线性模型",
    quote: "直线属于人类，曲线属于上帝。", 
    author: "― 安东尼·高迪，建筑师、设计师",
    image: "src/assets/straight_lines.jpg",
    title: "《如何手工绘制直线》 - 'tatyanadeniz.com/straight-lines'", 
    description: "这是一副完全由直线构成的图案。尽管都是些直线，但这里只是简单地将这些直线以一定的规律和角度组合在一起，就给人一定的美感和变化的错觉。这说明，简单的直线也可以用来构建一些复杂的的作品。"
  },
  { id: 3,
    name: "章节 3: 模型背后的数学原理 (I)",
    quote: "梯度下降比你更擅长写代码。对不起。",
    author: "― 安德烈·卡帕斯，OpenAI 联合创始人之一",
    image: "src/assets/gradient_descent.jpeg",
    title: "梯度下降模拟 - 两个参数",
    description: "这张图很形象地描叙了损失函数是如何随着两个参数的变化而变化的，它就像一张凹凸不平的膜，而我们的目的是找到这张膜的最低点。图中的箭头展示了梯度下降算法在参数空间 (二维膜) 中移动的路径，以最小化损失函数。箭头沿着膜表面的移动，则表示参数是如何通过迭代更新来调整和减少损失函数数值的。"
  },
  { id: 4,
    name: "章节 4: 一个二元分类模型",
    quote: "机器学习的核心在于基于数据进行预测。其本质是泛化，即形成能够让我们对未知对象进行分类的规则。",
    author: "― 佩德罗·多明戈斯《终极算法》",
    image: "src/assets/classification.webp",
    title: "数据分类过程的可视化：从输入到输出",
    description: "这张图只是一个视觉隐喻，用力啊表示一个机器学习的基本概念: 分类问题，它显示了原始数据通过计算机系统转化为有意义的分类后的信息的过程。"
  },
  { id: 5,
    name: "章节 5: 模型背后的数学原理 (II)",
    quote: "反向传播算法可能是深度学习中最重要的算法。",
    author: "― 约翰·D·凯利赫 《深度学习》",
    image: "src/assets/backpropagation.webp",
    title: "多层感知机 (MLP) 手绘图 | D. Goglia",
    description: "这幅手绘图简单地表示了深度学习的一个基础架构，我们称之为多层感知机 (MLP)。图中的神经网络相当简单，只有一个隐藏层, 且是全连接的前馈结构。在上一章的模型中，我们已经构建了一个类似的网络，而本章，我们将深入讨论成就了 MLP 的反向传播算法。"
  },
  { id: 6,
    name: "章节 6: 一个卷积神经网络模型",
    quote: "婴儿在学会说话之前先学会观察世界。视觉能力的发展是机器实现通用智能的前提条件。",
    author: "― 杨立昆，知名于 CNNs",
    image: "src/assets/generated_girl.webp",
    title: "计算机生成的女孩，近距离看非常漂亮。CGI肖像渲染和3D渲染, 由 Creative Photo Corner 创作",
    description: "计算机视觉的发展已经相当成熟，而 ChatGPT 的出现让图片生成领域更近一步。比如这张由计算机生成的人脸图像，几乎可以以假乱真。这些进展正在改变我们与技术的互动方式，使虚拟助手和机器人变得更加自然和引人入胜。除了技术领域之外，它们还挑战了我们在数字时代对身份、真实性和现实的认知。"
  },
  { id: 7,
    name: "章节 7: 模型背后的数学原理 (III)",
    quote: "人工智能将成为21世纪最具变革性的技术。它将影响到每个行业和我们生活的各个方面。",
    author: "― 黄仁勋，NVIDIA 开创者",
    image: "src/assets/naushika.jpg",
    title: "《风之谷》中的娜乌西卡, 由 books_baking_broadway 创作",
    description: "左侧的图像展示了由AI生成的现实版娜乌西卡 (来自《风之谷的娜乌西卡》中的角色)。通过使用图像合成等计算机视觉技术，AI可以通过学习大量现实图像和动画图片，将动画角色转化为现实风格的人物图像。"
  },
  { id: 8,
    name: "章节 8: 一个视觉 Transformer 模型",
    quote: "当动物第一次进化出眼睛时，动物的生命突然变得主动了。",
    author: "― 李飞飞，ImageNet 开创者",
    image: "src/assets/patch_embedding.jpg",
    title: "个性化的文字艺术肖像，周年纪念艺术印刷，由Scribbly Goose创作",
    description: "这是一张由文字生成的结婚照，文字的明暗变化构成了这幅结婚照的主要轮廓。而文字又描叙着他们之间的故事，很有创意的一幅作品。文字可以组成一幅图片，那么图片是否可以看作一个个文字。在计算机视觉中，将一张图片分割成一个个单独的 “文字” ，然后像自然语言处理一样对这些“文字”进行编码分析。"
  },
  { id: 9,
    name: "章节 9: 模型背后的数学原理 (IV)",
    quote: "如果你把智慧看得比其他所有人类品质都重要，你将会度过一段糟糕的时光。",
    author: "― 伊尔亚·苏茨克维，前 OpenAI 首席科学家",
    image: "src/assets/yamatanoorochi.jpeg",
    title: "八岐大蛇 | 插画素材",
    description: "这张图片描绘了一个神话故事中的怪兽 - 八岐大蛇 - 一个拥有八头的巨蛇。图中我们可以看到一名手持利剑的战士，站在大蛇前准备战斗，而巨大的八岐大蛇缓缓地从背景中浮现出来，每个龙形的头部颜色形状各异，霸气侧漏。似乎在大家的心中，多头就是一个代表厉害的概念，这个和 Transformer 模型中的多头注意力机制似乎不谋而合。"
  },
  { id: 10,
    name: "章节 10: 一个自然语言翻译模型",
    quote: "人工智能将成为人类历史上最好或最坏的事情。",
    author: "― 埃隆·马斯克",
    image: "src/assets/languages.webp",
    title: "自然语言",
    description: "这幅用世界各地的 ‘你好’ 组成的图画，生动地展现了人类语言的丰富性。英语、西班牙语、日语、汉语..., 每种语言都像一扇独特的窗户，让我们可以看见不同文化的风景。计算机的自然语言处理，就像一名多语种译者，帮助说不同语言的人跳过语言的障碍，实现沟通自由。"
  },
  { id: 11,
    name: "章节 11: 模型背后的数学原理 (V)",
    quote: "ATTENTION IS ALL YOU NEED.",
    author: "― 2017年 'Transformer' 论文",
    image: "src/assets/llms.jpg",
    title: "什么是大语言模型 (LLMs)?",
    description: "大型语言模型，就像 ChatGPT，已经可以像人一样理解、生成和使用语言。它们通过学习大量的文本，学会了语言的复杂规则和含义。这些模型的核心是 Transformer 架构，它让模型能够更好地理解上下文，高效处理大量文本。"
  },
]