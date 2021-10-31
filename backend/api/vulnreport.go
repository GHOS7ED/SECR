package api

import (
	"fmt"
	"os/exec"
	"regexp"
)

var regexPatterns = map[string]string{
	"cve": `CVE-\d{4}-\d{1,10}`,
}

func ExecuteVulnscan(URL string) error {
	output, err := exec.Command("/bin/sh", "./nmap/vulnscan.sh", URL).Output()
	if err != nil {
		return err
	}
	re := regexp.MustCompile(regexPatterns["cve"])
	fmt.Printf("%q\n", (re.FindAll(output, -1)))
	return nil
}
