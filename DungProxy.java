import java.io.*;
import java.net.*;
import java.util.regex.*;

public class DungProxy {
	public static void main(String[] args) throws IOException {
		try {
			String host = "Dung Proxy Server";
			int remoteport = 80;
			int localport = 8585;
			if (args.length > 0) {
				try {
					localport = Integer.parseInt(args[0]);
				} catch (NumberFormatException e) {
					System.err.println("Port must be an integer");
					System.exit(1);
				}
			}
			// Print a start-up message
			System.out.println("Starting proxy for " + host + ":" + remoteport + " on port " + localport);
			// And start running the server
			runServer(host, remoteport, localport); // never returns
		} catch (Exception e) {
			System.err.println(e);
		}
	}

	public static String errReturn(String err, String url) {
		return "dung_beetle.proxyError('"+err+"', '"+url+"')";
	}

	public static String cssReturn(String css, String url) {
		return "dung_beetle.catchCSS('"+escapeStr(css)+"', '"+url+"')";
	}

	public static String jsReturn(String js, String url) {
		return "dung_beetle.catchJS('"+escapeStr(js)+"', '"+url+"')";
	}
	
	/**
	 * Escape a string to be put into a single quoted javascript function
	 */
	public static String escapeStr(String s) {
		Pattern p = Pattern.compile("[\r|\n]+");
		String[] spt = p.split(s.replace("\\", "\\\\").replace("'", "\\'"));
		StringBuilder sb = new StringBuilder();
		for(int x=0; x<spt.length; x++) {
			sb.append(spt[x] + "~$~");
		}
		return sb.toString();
	}

	/**
	 * runs a single-threaded proxy server on
	 * the specified local port. It never returns.
	 */
	public static void runServer(String host, int remoteport, int localport) throws IOException {
		// Create a ServerSocket to listen for connections with
		ServerSocket ss = new ServerSocket(localport);

		final byte[] request = new byte[1024];
		byte[] reply = new byte[4096];

		while (true) {
			Socket client = null;
			try {
				// Wait for a connection on the local port
				client = ss.accept();

				final InputStream streamFromClient = client.getInputStream();
				final OutputStream streamToClient = client.getOutputStream();

				PrintWriter out = new PrintWriter(streamToClient);
				StringBuilder sb = new StringBuilder();
				String line = null, url = "", userAgent = "";
				try {
					BufferedReader reader = new BufferedReader(new InputStreamReader(streamFromClient , "UTF-8"));
					while ((line = reader.readLine()) != null && (url.length() == 0 && userAgent.length() == 0)) {
						if(line.indexOf("GET") > -1 && url.length() == 0) {
							String[] spl = line.split(" ");
							url = removeFirst(spl[1], '/');
						}
						if(line.indexOf("User-Agent") > -1 && userAgent.length() == 0) {
							userAgent = line.replace("User-Agent ", "");
						}
					}
				} finally {
				}

				System.out.println(url);
				URL req = new URL(url);
				URLConnection urlConn = req.openConnection();
				urlConn.setRequestProperty("User-Agent", userAgent);
				BufferedReader in = new BufferedReader(new InputStreamReader(urlConn.getInputStream()));
				StringBuilder osb = new StringBuilder();
				while((line = in.readLine()) != null) {
					osb.append(line);
				}
				streamToClient.write(cssReturn(osb.toString(), url).getBytes());
				in.close();
				streamToClient.close();
			} catch (IOException e) {
				System.err.println(e);
			} finally {
				try {
					if (client != null) {
						client.close();
					}
				} catch (IOException e) {
				}
			}
		}
	}
	public static String removeFirst(String s, char c) {
		String r = "";
		boolean found = false;
		for (int i = 0; i < s.length(); i ++) {
			if (s.charAt(i) != c || found) {
				r += s.charAt(i);
				found = true;
			}
		}
		return r;
	}
}
