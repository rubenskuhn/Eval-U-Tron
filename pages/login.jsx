import { useState } from "react";
import { useRouter } from "next/router";
import { useSession, signIn, signOut } from "next-auth/react";
import { Box, Image, Flex } from "@chakra-ui/react";

export default function Login() {
  const { data: session } = useSession();
  console.log(session);

  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  if (session) {
    return (
      <>
        <Flex>
          <Box>
            Welcome {session.user.email}
            <Image src={session.user.image} alt="" />
            <button onClick={() => signOut()}>Sign out</button>
          </Box>
        </Flex>
      </>
    );
  } else {
    return (
      <>
        <Flex>
          <div>
            <p>You are not signed in.</p>
            <button onClick={() => signIn()}>Sign in</button>
          </div>
        </Flex>
      </>
    );
  }
}
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // Perform authentication logic here
//     // For demonstration purposes, simply redirect to the home page on form submission
//     router.push("/");
//   };

//   return (
//     <div>
//       <h1>Login</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Username:</label>
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
