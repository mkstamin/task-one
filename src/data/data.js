import { FaExclamation, FaGoogleDrive, FaItalic, FaTheaterMasks, FaWeebly } from 'react-icons/fa';

const data = [
    {
        id: 1,
        title: 'lettermark',
        icon: <FaItalic />,
        images: ['letter-1.png', 'letter-2.png', 'letter-3.png'],
        desc: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.`,
    },
    {
        id: 2,
        title: 'wordmark',
        icon: <FaWeebly />,
        images: ['word-1.png', 'word-2.png', 'word-3.png'],
        desc: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.`,
    },
    {
        id: 3,
        title: 'pictoricl mark',
        icon: <FaExclamation />,
        images: ['pictoricl-1.png', 'pictoricl-2.png', 'pictoricl-3.png'],
        desc: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.`,
    },
    {
        id: 4,
        title: 'abstract mark',
        icon: <FaGoogleDrive />,
        images: ['abstract-1.png', 'abstract-2.png', 'abstract-3.png'],
        desc: `But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.`,
    },
    {
        id: 5,
        title: 'mascot',
        icon: <FaTheaterMasks />,
        images: ['mascot-1.png', 'mascot-2.png', 'mascot-3.png'],
        desc: `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.`,
    },
    {
        id: 6,
        title: 'combination',
        icon: <FaExclamation />,
        images: ['combination-1.png', 'combination-2.png', 'combination-3.png'],
        desc: `On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish.`,
    },
];

export default data;
