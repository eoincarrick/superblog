import React from 'react'
import { Link } from 'react-router-dom'

const home = () => {


  const posts = [
    {
      id: 1,
      title: 'React Node.js MySQL Full Stack Blog App Tutorial',
      desc: `The Yoruba terms obinrin and okunrin do express a distinction. Reproduction is, obviously, the basis of human existence, and given its import, and the primacy of anafemale [anatomical female] body-type, it is not surprising that the Yoruba language describes the two types of anatomy. The terms okunrin and obinrin, however, merely indicate the physiological differences between the two anatomies as they have to do with procreation and intercourse. They refer, then, to the physically marked and physiologically apparent differences between the two anatomies. They do not refer to gender categories that connote social privileges and disadvantages. Also, they do not express sexual dimorphism because the distinction they indicate is specific to issues of reproduction. To appreciate this point, it would be necessary to go back to the fundamental difference between the conception of the Yoruba social world and that of Western societies.`,
      image: 'https://images.unsplash.com/photo-1541454493513-e490bc045b6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1189&q=80'
    },
    {
      id: 2,
      title: 'React Node.js MySQL Full Stack Blog App Tutorial 2',
      desc: `The Yoruba terms obinrin and okunrin do express a distinction. Reproduction is, obviously, the basis of human existence, and given its import, and the primacy of anafemale [anatomical female] body-type, it is not surprising that the Yoruba language describes the two types of anatomy. The terms okunrin and obinrin, however, merely indicate the physiological differences between the two anatomies as they have to do with procreation and intercourse. They refer, then, to the physically marked and physiologically apparent differences between the two anatomies. They do not refer to gender categories that connote social privileges and disadvantages. Also, they do not express sexual dimorphism because the distinction they indicate is specific to issues of reproduction. To appreciate this point, it would be necessary to go back to the fundamental difference between the conception of the Yoruba social world and that of Western societies.`,
      image: 'https://images.unsplash.com/photo-1544894079-e81a9eb1da8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    },
    {
      id: 3,
      title: 'React Node.js MySQL Full Stack Blog App Tutorial 3',
      desc: `The Yoruba terms obinrin and okunrin do express a distinction. Reproduction is, obviously, the basis of human existence, and given its import, and the primacy of anafemale [anatomical female] body-type, it is not surprising that the Yoruba language describes the two types of anatomy. The terms okunrin and obinrin, however, merely indicate the physiological differences between the two anatomies as they have to do with procreation and intercourse. They refer, then, to the physically marked and physiologically apparent differences between the two anatomies. They do not refer to gender categories that connote social privileges and disadvantages. Also, they do not express sexual dimorphism because the distinction they indicate is specific to issues of reproduction. To appreciate this point, it would be necessary to go back to the fundamental difference between the conception of the Yoruba social world and that of Western societies.`,
      image: 'https://images.unsplash.com/photo-1541454493513-e490bc045b6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1189&q=80'
    },
    {
      id: 4,
      title: 'React Node.js MySQL Full Stack Blog App Tutorial 4',
      desc: `The Yoruba terms obinrin and okunrin do express a distinction. Reproduction is, obviously, the basis of human existence, and given its import, and the primacy of anafemale [anatomical female] body-type, it is not surprising that the Yoruba language describes the two types of anatomy. The terms okunrin and obinrin, however, merely indicate the physiological differences between the two anatomies as they have to do with procreation and intercourse. They refer, then, to the physically marked and physiologically apparent differences between the two anatomies. They do not refer to gender categories that connote social privileges and disadvantages. Also, they do not express sexual dimorphism because the distinction they indicate is specific to issues of reproduction. To appreciate this point, it would be necessary to go back to the fundamental difference between the conception of the Yoruba social world and that of Western societies.`,
      image: 'https://images.unsplash.com/photo-1541454493513-e490bc045b6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1189&q=80'
    },
    {
      id: 5,
      title: 'React Node.js MySQL Full Stack Blog App Tutorial 5',
      desc: `The Yoruba terms obinrin and okunrin do express a distinction. Reproduction is, obviously, the basis of human existence, and given its import, and the primacy of anafemale [anatomical female] body-type, it is not surprising that the Yoruba language describes the two types of anatomy. The terms okunrin and obinrin, however, merely indicate the physiological differences between the two anatomies as they have to do with procreation and intercourse. They refer, then, to the physically marked and physiologically apparent differences between the two anatomies. They do not refer to gender categories that connote social privileges and disadvantages. Also, they do not express sexual dimorphism because the distinction they indicate is specific to issues of reproduction. To appreciate this point, it would be necessary to go back to the fundamental difference between the conception of the Yoruba social world and that of Western societies.`,
      image: 'https://images.unsplash.com/photo-1541454493513-e490bc045b6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1189&q=80'
    },
    {
      id: 6,
      title: 'React Node.js MySQL Full Stack Blog App Tutorial 6',
      desc: `The Yoruba terms obinrin and okunrin do express a distinction. Reproduction is, obviously, the basis of human existence, and given its import, and the primacy of anafemale [anatomical female] body-type, it is not surprising that the Yoruba language describes the two types of anatomy. The terms okunrin and obinrin, however, merely indicate the physiological differences between the two anatomies as they have to do with procreation and intercourse. They refer, then, to the physically marked and physiologically apparent differences between the two anatomies. They do not refer to gender categories that connote social privileges and disadvantages. Also, they do not express sexual dimorphism because the distinction they indicate is specific to issues of reproduction. To appreciate this point, it would be necessary to go back to the fundamental difference between the conception of the Yoruba social world and that of Western societies.`,
      image: 'https://images.unsplash.com/photo-1541454493513-e490bc045b6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1189&q=80'
    },
  ]

  return (
    <div className='home'>
      <div className="post">
        {posts.map((post, index) => (
          <div className="post">
            <div className="img">
              <img src={post.image} alt="" />
            </div>

            <div className="content">
              <Link to={`posts/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>

              <p>{post.desc}</p>
              <button>Read more</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default home